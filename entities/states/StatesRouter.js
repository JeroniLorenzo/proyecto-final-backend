const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');

const StatesController = require('./StatesController')

router.get('/getAll', isAdmin, StatesController.getAllStates);
router.post("/newState", isAdmin, StatesController.newState);
router.put("/updateState", isAdmin, StatesController.updateState);
router.delete("/deleteState", isAdmin, StatesController.deleteState);


module.exports = router;