const express = require('express');
const passport = require("passport");
const user = require("../models/user")
const router = express.Router();

router.post('/login', (req,res) => {
    user.findOne({username:req.body.username}, (err, userDetails) => {
        if (err) {
            return done(err);
        }

        if (!userDetails) {
            console.log('Incorrect Usernam');
            res.status(409).json({ errors: "Incorrect Username" });
        }

        //Match Password
        if(req.body.password === userDetails.password) {
            console.log('Authenticated');
            res.status(200).json({ success: true, message: "User logged in successfully", user: userDetails });
        }else{
            console.log('Incorrect Password');
            res.status(409).json({ errors: "Incorrect Password" });
        }

    });
//   passport.authenticate("local",  {successRedirect:'/', failureRedirect:'login?error=true'}, (err, result, info) => {

//     if (err) {
//       return res.status(400).json({ errors: err });
//     }
//     if (!result) {
//       res.status(409).json({ errors: "Incorrect Email or Password" });
//       return;
//     }

//     req.logIn(result, (err) => {

//       if (err) {
//         console.log(err);
//         return res.status(400).json({ errors: err });
//       }

//       return res.status(200).json({ success: true, message: "User logged in successfully", user: req.user });

//     });
//   })(req, res);
});

router.get("/logout", (req, res) => {
  req.logout(req.user, (err,next) => {
    if(err) {
      return next(err);
    }
    res.status(200).json({
      message: "Logged out successfully"
    });
  });
});

module.exports = router;
