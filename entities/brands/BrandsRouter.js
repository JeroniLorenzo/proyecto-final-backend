const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');

const BrandsController = require('./BrandsController')

router.post('/', isAdmin, BrandsController.getAllBrands);
router.post("/", auth, isAdmin, BrandsController.newBrand);
router.put("/", auth, isAdmin, BrandsController.updateBrand);
router.delete("/", auth, isAdmin, BrandsController.deleteBrand);


module.exports = router;