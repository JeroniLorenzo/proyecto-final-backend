const Racket = require('./racket');
const Brand = require('../brands/brand');
const State = require('../states/state');

const RacketsController = {};

RacketsController.getAllRackets = async (req, res) => {

    try {

        let result = await Racket.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna pala." })
        }

    } catch (error) {
        res.json({error: error.message});
    }
};

RacketsController.getRacketByModel = async (req, res) => {

    const model = req.params.model;
    // const brandName = req.params.brand;
    // const stateName = req.params.state;

    try {
        const foundRackets = await Racket.find({'model':{'$regex': model, '$options': 'i'}});
        if (!foundRackets.length) {
            res.status(404);
            res.json({ error: 'This racket is not in our data base' });
            return;
        }
        res.send(foundRackets);
    } catch (error) {
        console.log(error);
    }

    // try {
    //     const foundBrands = await Brand.find({ "name": { "$regex": brandName, "$options": "i" } });
    //     if (!foundBrands.length) {
    //         res.status(404);
    //         res.json({ error: 'This brand is not in our data base' });
    //         return;
    //     }
    //     res.send(foundBrands);
    // } catch (error) {
    //     console.log(error);
    // }
};

RacketsController.newRacket = async (req, res) => {

    try {

        let racket = await Racket.create({
            model: req.body.model,
            price: req.body.price,
            level: req.body.level,
            type: req.body.type,
            image: req.body.image,
            brand: req.body.brand,
            state: req.body.state,
            
        })
        console.log(racket)
        if (racket) {
            res.send({ "Message": `Racket ${racket.brand} ${racket.model} has been successfuly added` })
        }

    } catch (error) {
        res.json({error: error.message});
    }

};

RacketsController.updateRacket = async (req, res) => {

    let _id = req.body._id;
    let newModel = req.body.model;
    let newPrice = req.body.price;
    let newLevel = req.body.level;
    let newType = req.body.type;
    let newImage = req.body.image;
    let newBrand = req.body.brand;
    let newState = req.body.state;


    try {
        let updated = await Racket.findOneAndUpdate(

            { _id: _id },

            {
                model: newModel,
                price: newPrice,
                level: newLevel,
                type: newType,
                image: newImage,
                brand: newBrand,
                state: newState
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send(`Racket updated successfuly`)
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

RacketsController.deleteRacket = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Racket.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": `Racket ${deleted.brand} ${deleted.model} has been removed successfuly` })
        }
    } catch (error) {
        res.json({error: error.message});

    }
};

module.exports = RacketsController;