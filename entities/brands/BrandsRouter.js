const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');

const BrandsController = require('./BrandsController')

router.get('/', isAdmin, BrandsController.getAllBrands);
router.post("/", isAdmin, BrandsController.newBrand);
router.put("/", isAdmin, BrandsController.updateBrand);
router.delete("/", isAdmin, BrandsController.deleteBrand);


module.exports = router;