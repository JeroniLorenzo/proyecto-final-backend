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
            adress: req.body.adress,
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
    let newAdress = req.body.adress;
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
                adress: newAdress,
                password: newPassword,
                phone: newPhone,
                roleId: newRoleId,
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send(`Updated user successfuly`)
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

UsersController.deleteUser = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await User.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": `User ${deleted.name} ${deleted.surname} has been removed successfuly` })
        }
    } catch (error) {
        res.json({error: error.message});

    }
};

UsersController.loginUser = async (req, res) => {

    try {

        let userFound = await User.find({
            email: req.body.email
        })

        
        if (userFound) {
            
            if (userFound[0].email === undefined) {

                res.send("Incorrect pass");
            } else {
               
                if (bcrypt.compareSync(req.body.password, userFound[0].password)) {
                    console.log(userFound[0])
                    let token = jsonwebtoken.sign( {id:userFound[0]._id, roleId:userFound[0].roleId } , SECRET, {
                        expiresIn: EXPIRES
                    });

                    let loginOk = `Welcome back ${userFound[0].name}`;
                    res.json({
                        loginOk,
                        user: userFound,
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