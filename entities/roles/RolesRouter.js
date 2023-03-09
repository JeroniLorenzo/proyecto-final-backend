const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');

const RolesController = require('./RolesController')

router.get('/', isAdmin, RolesController.getAllRoles);
router.post("/", isAdmin, RolesController.newRole);
router.put("/", isAdmin, RolesController.updateRole);
router.delete("/", isAdmin, RolesController.deleteRole);


module.exports = router;