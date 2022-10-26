const mongoose = require('mongoose');
const equipmentsSchema = new mongoose.Schema({
    eName:{
        type:String,
        required:true
    },
    ePrice:{
        type:Number,
        required: true
    },
    nextServiceDate:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("equipment",equipmentsSchema);