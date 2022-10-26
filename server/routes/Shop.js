const express = require('express');
const Shop = require('../models/Shop');

const router = express.Router();

//save Items
router.post('/save',(req,res)=>{

    let newShop = new Shop(req.body);

    newShop.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            }); 
        }
        return res.status(200).json({
            success:"Items saved successfully"
        });
    }); 
});

//get Items

router.get('/',(req,res)=>{
    Shop.find().exec((err,Shop)=>{
        if(err){            //if error
            return res.status(400).json({ 
                error:err
            });
        }                   //if no error
        return res.status(200).json({
            success:true,
            existingShop:Shop
        });
    });
});

//update Items
router.put('/update/:id',(req,res)=>{
    Shop.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body //set the new data for the doctor
        },
        (err,Shop)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//delete Items
router.delete('/delete/:id',(req,res)=>{
    Shop.findByIdAndRemove(req.params.id).exec((err,deletedShop)=>{         //find the doctor by id and remove it
        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete successful",deletedShop
        });
    });
});

//get a specific Item
router.get("/:id",(req,res)=>{
    let ShopId = req.params.id;

    Shop.findById(ShopId,(err,Shop)=>{       //find the doctor by id
        if(err){
            return res.status(400).json({success:false,err});   //if error
        }
        return res.status(200).json({     //if no error
            success:true,
            Shop
        });
    });
});


module.exports = router;
