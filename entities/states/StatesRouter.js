const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');

const StatesController = require('./StatesController')

router.get('/', auth, isAdmin, StatesController.getAllStates);
router.post("/", auth, isAdmin, StatesController.newState);
router.put("/", auth, isAdmin, StatesController.updateState);
router.delete("/", auth, isAdmin, StatesController.deleteState);


module.exports = router;