const express = require('express');
let Email = require('../models/email-model').Email;
let uniqid = require('uniqid');
let router = express.Router();
let middleaware = require('../middleware/auth');

router.get('/', middleaware , async (req , res) => {
   let mails =  await Email.find();
   res.send(mails);

})
router.post('/', async (req, resp) => {
    let reqBody = req.body;
    let newEmail = new Email({
        id: uniqid(),
        name: reqBody.name,
        message: reqBody.text,
        email: reqBody.email,
        date: new Date()
    }) 
    await newEmail.save()
    resp.send('Accepted');
});
router.delete('/:id' ,middleaware , async (req , res) => {
    let id = req.params.id;
    await Email.deleteOne({id : id});
    res.send('Deleted');
})

module.exports = router;