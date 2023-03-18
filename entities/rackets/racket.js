const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const racketSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    level: {
        type: String,
    },
    type: {
        type: String,
    },
    image: {
        type: String
    },
    brand:{
        type: Schema.ObjectId,
        ref: "Brand"
    },
    state:{
        type: Schema.ObjectId,
        ref: "State"
    }

});

const Racket = mongoose.model('Racket', racketSchema);
module.exports = Racket;