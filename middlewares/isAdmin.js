module.exports =  (req, res, next) => {

    if(req.user && req.user.roleId == "admin"){
        next();
    }else {
        res.status(401).send(`Forbidden access`)
    }
  
};