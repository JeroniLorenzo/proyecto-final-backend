const router = require('express').Router();


const UsersRouter = require('./entities/users/UsersRouter');


router.use("/users", UsersRouter);



module.exports = router;