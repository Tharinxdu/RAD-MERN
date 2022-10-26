const express = require('express');
const meal = require('../models/meal');
const router = express.Router();

//save meals

router.post('/meal/save',(req,res)=>{
    let newMeal = new meal(req.body);

    newMeal.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Meal plan saved successfully"
        });
    });
});

//get meals

router.get('/meal',(req,res)=>{
    meal.find().exec((err,meal)=>{
        if(err){            //if error
            return res.status(400).json({ 
                error:err
            });
        }                   //if no error
        return res.status(200).json({
            success:true,
            existingMeal:meal
        });
    });
});

//update meals
router.put('/meal/update/:id',(req,res)=>{
    meal.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body //set the new data for the meal plan
        },
        (err,meal)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//delete meals
router.delete('/meal/delete/:id',(req,res)=>{
    meal.findByIdAndRemove(req.params.id).exec((err,deletedMeal)=>{         //find the meal by id and remove it
        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete successful",deletedMeal
        });
    });
});

//get a specific meal plan
router.get("/meal/:id",(req,res)=>{
    

    meal.findById(req.params.id,(err,meal)=>{       //find the meal by id
        if(err){
            return res.status(400).json({success:false,err});   //if error
        }
        return res.status(200).json({     //if no error
            success:true,
            meal
        });
    });
});

module.exports=router;