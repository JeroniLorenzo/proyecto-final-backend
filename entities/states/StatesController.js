const State = require('./state');
const StatesController = {};

StatesController.getAllStates = async (req, res) => {

    try {

        let result = await State.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Sorry, any state finded." })
        }

    } catch (error) {
        res.json({error: error.message});
    }
};

StatesController.newState = async (req, res) => {

    try {

        let state = await State.create({
            name: req.body.name,        
            
        })

        if (state) {
            res.send({ "Message": `State ${state.name} has been successfuly added` })
        }

    } catch (error) {
        res.json({error: error.message});
    }

};

StatesController.updateState = async (req, res) => {

    const newName = req.body.name;   


    try {
        let updated = await State.findOneAndUpdate(

            { _id: _id },

            {
                name: newName,
                
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send(`Updated State successfuly`)
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

StatesController.deleteState = async (req, res) => {
    const _id = req.body._id;

    try {
        let deleted = await State.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": `State ${deleted.name} has been removed successfuly` })
        }
    } catch (error) {
        res.json({error: error.message});

    }
};

module.exports = StatesController;