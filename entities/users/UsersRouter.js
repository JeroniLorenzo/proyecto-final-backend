const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');

const UsersController = require('./UsersController')

router.get('/', isAdmin, UsersController.getAllUsers);
router.post("/", UsersController.newUser);
router.put("/", isAdmin, UsersController.updateUser);
router.delete("/", isAdmin, UsersController.deleteUser);
router.post("/login", UsersController.loginUser);

module.exports = router;