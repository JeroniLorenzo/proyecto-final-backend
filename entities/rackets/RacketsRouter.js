const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');

const RacketsController = require('./RacketsController')

router.get('/', RacketsController.getAllRackets);
router.get("/model/:model", RacketsController.getRacketByModel);
router.post("/", auth, isAdmin, RacketsController.newRacket);
router.put("/", auth, isAdmin, RacketsController.updateRacket);
router.delete("/", auth, isAdmin,RacketsController.deleteRacket);


module.exports = router;