const mongoose = require('mongoose');
const mealSchema = new mongoose.Schema({
    client_name:{
        type:String,
        required:true
    },
    client_id:{
        type:String,
        required:true,
        unique:true
    },
    weight:{
        type:String,
        required:true
    },
    height:{
        type:String,
        required:true
    },
    body_fat_percentage:{
        type:String,
        required:true
    },
    breakfast:{
        type:String,
    },
    mid_morning:{
        type:String,
    },
    lunch:{
        type:String,
    },
    evening:{
        type:String,
    },
    dinner:{
        type:String,
    }

});

module.exports = mongoose.model("meal",mealSchema);