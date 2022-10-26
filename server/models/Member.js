const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Member_ID:{
        type:String,
        required:true
    },
    NIC:{
        type:String,
        required:true
    },
    Duration:{
        type:String,
        required:false
    },
    DOB:{
        type:String,
        required:true
    },
    Date_of_admission:{
        type:String,
        required:true
    }  


});

module.exports = mongoose.model("Member",memberSchema);