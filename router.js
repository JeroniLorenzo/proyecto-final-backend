const router = require('express').Router();


const UsersRouter = require('./entities/users/UsersRouter');
const RacketsRouter = require('./entities/rackets/RacketsRouter');
const SalesRouter = require('./entities/sales/SalesRouter');
const RolesRouter = require('./entities/roles/RolesRouter');
const BrandsRouter = require('./entities/brands/BrandsRouter');


router.use("/users", UsersRouter);
router.use("/rackets", RacketsRouter);
router.use("/sales", SalesRouter);
router.use("/roles", RolesRouter);
router.use("/brands", BrandsRouter);



module.exports = router;