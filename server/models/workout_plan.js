const mongoose = require('mongoose');
const workout_planSchema = new mongoose.Schema({
    Plan_name:{
        type:String,
        required:true
    },
    Workout_plan_ID:{
        type:String,
        required:true
    },
    Bodyparts:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Day:{
        type:String,
        required:false
    }


});

module.exports = mongoose.model("workout_plan",workout_planSchema);