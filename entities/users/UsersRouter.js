const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');

const UsersController = require('./UsersController')

router.get('/', auth, isAdmin, UsersController.getAllUsers);
router.post("/", UsersController.newUser);
router.put("/", auth, isAdmin, UsersController.updateUser);
router.delete("/", auth, isAdmin, UsersController.deleteUser);
router.post("/login", UsersController.loginUser);

module.exports = router;