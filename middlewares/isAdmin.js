const  User  = require('../entities/users/user');

module.exports = (req, res, next) => {

    const email = req.body.email;


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





