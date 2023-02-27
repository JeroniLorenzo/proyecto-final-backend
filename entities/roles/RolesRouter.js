const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');

const RolesController = require('./RolesController')

router.get('/getAll', isAdmin, RolesController.getAllRoles);
router.post("/newRole", RolesController.newRole);
router.put("/updateRole", isAdmin, RolesController.updateRole);
router.delete("/deleteRole", isAdmin, RolesController.deleteRole);


module.exports = router;