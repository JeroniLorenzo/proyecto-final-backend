const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');

const StatesController = require('./StatesController')

router.get('/', isAdmin, StatesController.getAllStates);
router.post("/", isAdmin, StatesController.newState);
router.put("/", isAdmin, StatesController.updateState);
router.delete("/", isAdmin, StatesController.deleteState);


module.exports = router;