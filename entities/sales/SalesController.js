const Sale = require('./sale');

const SalesController = {};


SalesController.getAllSales = async (req, res) => {

    try {

        let result = await Sale.find({})
            .populate('userId')
            .populate('racketId');

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna compra." })
        }

    } catch (error) {
        res.json({error: error.message});
    }
};


SalesController.newSale = async (req, res) => {

    try {

        let sale = await Sale.create({
            userId: req.body.userId,
            racketId: req.body.racketId,
            date: req.body.date,
            price: req.body.price
        })


        if (sale) {

            res.send( {"Message": `La venta ha sido un éxito`});

        }else {

            res.send({ "Message": `Ha habido un error en la venta` });

        }

    } catch (error) {
        res.json({error: error.message});
    }

};

SalesController.getUserSales = async (req, res) =>{
    let id = req.params.id
    try {

        let result = await Sale.find({userId: id })
           

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ninguna compra." })
        }

    } catch (error) {
        res.json({error: error.message});
    }
};

module.exports = SalesController;