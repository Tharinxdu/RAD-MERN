const express = require('express');
const workout_plan = require('../models/workout_plan');
const router = express.Router();

//Save plan

router.post('/workout_plan/save',(req,res)=>{
    let newworkout_plan = new workout_plan(req.body);

    newworkout_plan.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"workout plan saved successfully"
        });
    });
});

//get plan

router.get('/workout_plan',(req,res)=>{
    workout_plan.find().exec((err,workout_plan)=>{
        if(err){            //if error
            return res.status(400).json({ 
                error:err
            });
        }                   //if no error
        return res.status(200).json({
            success:true,
            existingworkout_plan:workout_plan
        });
    });
});

//update plan
router.put('/workout_plan/update/:id',(req,res)=>{
    workout_plan.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body //set the new data for the doctor
        },
        (err,workout_plan)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//delete plan
router.delete('/workout_plan/delete/:id',(req,res)=>{
    workout_plan.findByIdAndRemove(req.params.id).exec((err,deleted_workout_plan)=>{         //find the doctor by id and remove it
        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete successful",deleted_workout_plan: deleted_workout_plan
        });
    });
});

//get a specific plan
router.get("/workout_plan/:id",(req,res)=>{
    let workoutplan_Id = req.params.id;

    workout_plan.findById(workoutplan_Id,(err,workout_plan)=>{       //find the plan by id
        if(err){
            return res.status(400).json({success:false,err});   //if error
        }
        return res.status(200).json({     //if no error
            success:true,
            workout_plan: workout_plan
        });
    });
});

module.exports=router;