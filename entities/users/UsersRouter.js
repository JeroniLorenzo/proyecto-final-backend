const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');


router.get('/getAll', isAdmin, UsersController.getAllUsers);
router.post("/newUser", UsersController.newUser);
router.put("/updateUser", isAdmin, UsersController.updateUser);
router.delete("/deleteUser", isAdmin,UsersController.deleteUser);
router.post("/login", UsersController.loginUser);

module.exports = router;