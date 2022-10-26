const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    itemname: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    price:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Shop',shopSchema);