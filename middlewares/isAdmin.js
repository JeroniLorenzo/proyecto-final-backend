module.exports =  (req, res, next) => {
    if(req.user && req.user.roleId == "63fce07fd7d5a2f9bc3257c2"){
        next();
    }else {
        res.status(401).send(`Forbidden access`)
    }
  
};





