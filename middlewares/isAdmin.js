// module.exports =  (req, res, next) => {
//  console.log(req.user)
//  console.log('holaaaaa')
//     if(req.user && req.user.roleId == "63f8a04c149b47df5a1a861a"){
//         next();
//     }else {
//         res.status(401).send(`Forbidden access`)
//     }
  
// };


const  User  = require('../entities/users/user');

module.exports = (req, res, next) => {

    let _id = req.body._id;


    User.find({

         _id : _id 

    }).then(foundUser => {

        if(foundUser[0].roleId == "63f8a04c149b47df5a1a861a"){
            console.log(foundUser[0])
            next();

        }else {
            res.send(`Forbidden access`)
        }
    }).catch(error => {
        res.send(`Introduce a valid user id`, error)
    })

};