const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');

const RolesController = require('./RolesController');

router.get('/', isAdmin, RolesController.getAllRoles);
router.post("/", auth, isAdmin, RolesController.newRole);
router.put("/", auth, isAdmin, RolesController.updateRole);
router.delete("/", auth, isAdmin, RolesController.deleteRole);


module.exports = router;