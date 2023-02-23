const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    racketId: {
        type: Schema.Types.ObjectId, ref: 'Racket',
        required: true
    },
    date: {
        type: String
    },
    price: { 
        type: String
    }

});

const Sale = mongoose.model("Sale", saleSchema);
module.exports = Sale;