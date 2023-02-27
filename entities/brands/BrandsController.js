const Brand = require('./Brand');
const BrandsController = {};

BrandsController.getAllBrands = async (req, res) => {

    try {

        let result = await Brand.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Sorry, any brand finded with this name." })
        }

    } catch (error) {
        res.json({error: error.message});
    }
};

BrandsController.newBrand = async (req, res) => {

    try {

        let brand = await Brand.create({
            name: req.body.name,        
            
        })

        if (brand) {
            res.send({ "Message": `Brand ${brand.name} has been successfuly added` })
        }

    } catch (error) {
        res.json({error: error.message});
    }

};

BrandsController.updateBrand = async (req, res) => {

    let newName = req.body.name;   


    try {
        let updated = await Brand.findOneAndUpdate(

            { _id: _id },

            {
                name: newName,
                
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send(`Updated Brand successfuly`)
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

BrandsController.deleteBrand = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Brand.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": `Brand ${deleted.name} has been removed successfuly` })
        }
    } catch (error) {
        res.json({error: error.message});

    }
};

module.exports = BrandsController;