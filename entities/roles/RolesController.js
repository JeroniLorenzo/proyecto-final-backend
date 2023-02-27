const Role = require('./role');
const RolesController = {};

RolesController.getAllRoles = async (req, res) => {

    try {

        let result = await Role.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún role." })
        }

    } catch (error) {
        res.json({error: error.message});
    }
};

RolesController.newRole = async (req, res) => {

    try {

        let role = await Role.create({
            name: req.body.name,        
            
        })

        if (role) {
            res.send({ "Message": `Role ${role.name} has been successfuly added` })
        }

    } catch (error) {
        res.json({error: error.message});
    }

};

RolesController.updateRole = async (req, res) => {

    let newName = req.body.name;   


    try {
        let updated = await Role.findOneAndUpdate(

            { _id: _id },

            {
                name: newName,
                
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send(`Updated role successfuly`)
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

RolesController.deleteRole = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Role.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": `Role ${deleted.name} has been removed successfuly` })
        }
    } catch (error) {
        res.json({error: error.message});

    }
};

module.exports = RolesController;