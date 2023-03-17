const express = require('express');

const router = express.Router();

 const auth = require('../../middlewares/auth');
 const isAdmin = require('../../middlewares/isAdmin');

const SalesController = require('./SalesController');


router.get("/getAll",auth, isAdmin, SalesController.getAllSales);

router.get("/userSales/:id", auth, SalesController.getUserSales);

router.post("/newSale", auth,  SalesController.newSale);


module.exports = router;