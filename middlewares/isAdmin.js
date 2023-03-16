const  User  = require('../entities/users/user');

module.exports = (req, res, next) => {

    let email  = req.body.email;
    User.find({
        email : email
         
    }).then(user => {
        
        if(user[0].roleId == "63fce07fd7d5a2f9bc3257c2"){
            
            next();

        }else {
            res.send(`Forbidden access`)
        }
    }).catch(error => {
        res.send(`Introduce a valid user email`, error)
    })

};

module.exports =  (req, res, next) => {
    console.log(req.user)
    if(req.user && req.user.roleId == "63fce07fd7d5a2f9bc3257c2"){
        next();
    }else {
        res.status(401).send(`Forbidden access`)
    }
  
};





