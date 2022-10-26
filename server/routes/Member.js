const express = require('express');
const Member = require('../models/Member');
const router = express.Router();

//Save member

router.post('/Member/save',(req,res)=>{
    let newMember = new Member(req.body);

    newMember.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Memebr saved successfully"
        });
    });
});

//get members

router.get('/Member',(req,res)=>{
    Member.find().exec((err,Member)=>{
        if(err){            //if error
            return res.status(400).json({ 
                error:err
            });
        }                   //if no error
        return res.status(200).json({
            success:true,
            existingMember:Member
        });
    });
});

//update member
router.put('/Member/update/:id',(req,res)=>{
    Member.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body //set the new data for the member
        },
        (err,Member)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//delete members
router.delete('/Member/delete/:id',(req,res)=>{
    Member.findByIdAndRemove(req.params.id).exec((err,deletedMember)=>{         //find the member by id and remove it
        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete successful",deletedMember: deletedMember
        });
    });
});

//get a specific member
router.get("/Member/:id",(req,res)=>{
    let MemberID = req.params.id;

    Member.findById(MemberID,(err,Member)=>{       //find the member by id
        if(err){
            return res.status(400).json({success:false,err});   //if error
        }
        return res.status(200).json({     //if no error
            success:true,
            Member: Member
        });
    });
});

module.exports=router;