const express = require('express');
const bcrypt = require('bcrypt');
let User = require('../models/user-model').User;
let router = express.Router();
let auth = require('../controller/auth');


router.post('/login' , async (req , res) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find({email : email});
    if(user.length > 0) {
        let comparePassword = await bcrypt.compare(password , user[0].password)
        if(comparePassword){
            let token = auth.generateToken(user[0]);
            res.cookie('auth_token' , token);
            res.send({
                redirectURL : '/admin'
            })
        }else {
            res.send('REJECTED');
        }

    }else {
        res.send('REJECTED');
    }
})


router.post('/register' , async (req , res) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find({email : email});
    if(user.length === 0) {
        let encryptedPassword = await bcrypt.hash(password , 12);
        let newUser = new User({
            email : email ,
            password : encryptedPassword
        });
        await newUser.save();
        res.send('New User Created Successfully')
    }else {
        res.send('REJECTED: User Already exist')
    }

})

module.exports = router;
