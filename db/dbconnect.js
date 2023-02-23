const dbconnect = ()=>{
    const mongoose = require('mongoose');

    mongoose.set('strictQuery', true);

    const {DB}=require('../config/auth');

    mongoose.connect(
        DB,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true  
        }, (err)=>{
            if(err){
                console.log('error connecting to the database', err); 
        } else {
            console.log("mongodb database is connected");
        }}
    );
};

module.exports = dbconnect;