const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');

const BrandsController = require('./BrandsController')

router.get('/getAll', isAdmin, BrandsController.getAllBrands);
router.post("/newBrand", BrandsController.newBrand);
router.put("/updateBrand", isAdmin, BrandsController.updateBrand);
router.delete("/deleteBrand", isAdmin, BrandsController.deleteBrand);


module.exports = router;