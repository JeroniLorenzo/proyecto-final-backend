const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');

const RacketsController = require('./RacketsController')

router.get('/getAll', RacketsController.getAllRackets);
router.post("/newRacket", isAdmin, RacketsController.newRacket);
router.put("/updateRacket", isAdmin, RacketsController.updateRacket);
router.delete("/deleteRacket", isAdmin,RacketsController.deleteRacket);

module.exports = router;