const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');

const RacketsController = require('./RacketsController')

router.get('/', RacketsController.getAllRackets);
router.get("/model/:model",  RacketsController.getRacketByModel);
router.post("/", isAdmin, RacketsController.newRacket);
router.put("/", isAdmin, RacketsController.updateRacket);
router.delete("/", isAdmin,RacketsController.deleteRacket);


module.exports = router;