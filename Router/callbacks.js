const express = require('express');
let Callback = require('../models/callback-model').Callback;
let router = express.Router();
let uniqid = require('uniqid');
let middleaware = require('../middleware/auth');


router.get('/' , middleaware , async (req , res) => {
    let calls =  await Callback.find();
    res.send(calls);

});
router.post('/' , async (req , res) => {
    let reqBody = req.body;
    let newCallback = new Callback({
        id: uniqid() ,
        phone: reqBody.phone,
        date : new Date()
    })
    await newCallback.save();
    res.send('Call saves');
});
router.delete('/:id', middleaware , async (req , res) => {
    let id = req.params.id;
    await Callback.deleteOne({id : id});
    res.send('Deleted');
})

module.exports = router;