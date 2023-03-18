const User = require('./user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const {SECRET, EXPIRES, ROUNDS} = require('../../config/auth');
const UsersController = {};


UsersController.getAllUsers = async (req, res) => {

    try {

        let result = await User.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún usuario." })
        }

    } catch (error) {
        res.json({error: error.message});
    }
};

UsersController.newUser = async (req, res) => {


    let password = bcrypt.hashSync(req.body.password, Number.parseInt(ROUNDS));

    try {

        let user = await User.create({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            address: req.body.address,
            password: password,
            phone: req.body.phone,
            roleId: req.body.roleId,
            
            
        })

        if (user) {
            res.send({ "Message": `User ${user.name} has been successfuly added` })
        }

    } catch (error) {
        res.json({error: error.message});
    }

};

UsersController.updateUser = async (req, res) => {


    let _id = req.body._id;
    let newName = req.body.name;
    let newSurname = req.body.surname;
    let newEmail = req.body.email;
    let newAddress = req.body.address;
    let newPassword = req.body.password;
    let newPhone = req.body.phone;
    let newRoleId = req.body.roleId;
    


    try {
        let updated = await User.findOneAndUpdate(

            { _id: _id },

            {
                name: newName,
                surname: newSurname,
                email: newEmail,
                address: newAddress,
                password: newPassword,
                phone: newPhone,
                roleId: newRoleId,
                
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send(`Updated user ${updated.name} ${updated.surname} successfuly`)
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

UsersController.deleteUser = async (req, res) => {
    const email = req.body.email
    const _id = req.body._id
    try {
        const user = await User.findOne({email});

          const deletedUser = await User.findByIdAndDelete(_id);
      
          if (deletedUser) {
            res.send({ "Message": `User ${deletedUser.name} ${deletedUser.surname} has been removed successfully` });
          } else {
            res.status(404).send({ error: `User with ID ${_id} not found` });
          }

      } catch (error) {
        res.status(500).send({ error: error.message });
      }
};

UsersController.loginUser = async (req, res) => {

    try {

        let user = await User.find({
            email: req.body.email
        })

        
        if (user) {
            
            if (user[0].email === undefined) {

                res.send("Incorrect pass");
            } else {
               
                if (bcrypt.compareSync(req.body.password, user[0].password)) {
                    console.log(user[0])
                    let token = jsonwebtoken.sign( {id:user[0]._id, roleId:user[0].roleId } , SECRET, {
                        expiresIn: EXPIRES
                    });

                    let loginOk = `Welcome back ${user[0].name}`;
                    res.json({
                        loginOk,
                        user: user,
                        token: token
                    })

                } else {
              
                    res.send("Incorrect pass");
                }
            }

        }


    } catch (error) {
        res.json({error: error.message});
    }
};

module.exports = UsersController;