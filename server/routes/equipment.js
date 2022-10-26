const express = require('express');
const Equipment = require('../models/equipment');
const router = express.Router();

//Save equipments

router.post('/equipment/save',(req,res)=>{
    let newEquipment = new Equipment(req.body);

    newEquipment.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Equipment saved successfully"
        });
    });
});

//get equipments

router.get('/equipment',(req,res)=>{
    Equipment.find().exec((err, Equipment)=>{
        if(err){            //if error
            return res.status(400).json({
                error:err
            });
        }                   //if no error
        return res.status(200).json({
            success:true,
            existingEquipment:Equipment
        });
    });
});

//get a specific equipment

router.get("/equipment/:id",(req,res)=>{
    let equipmentId = req.params.id;

    Equipment.findById(equipmentId,(err,equipment)=>{
        if (err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            equipment
        });
    });
})

//update equipments
router.put('/equipment/update/:id',(req,res)=>{
    Equipment.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body //set the new data for the appointment
        },
        (err,Equipment)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//delete equipments
router.delete('/equipment/delete/:id',(req,res)=>{
    Equipment.findByIdAndRemove(req.params.id).exec((err,deletedEquipment)=>{         //find the doctor by id and remove it
        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete successful",deletedEquipment
        });
    });
});

module.exports=router;

