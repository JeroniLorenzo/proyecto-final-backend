const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    address: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Role'
    }

});

const User = mongoose.model('User', userSchema);
module.exports = User;