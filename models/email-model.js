const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let emailsSchema = new Schema({
    id : String,
    name : String,
    email : String,
    date : Date,
    message : String,
});

let Email = mongoose.model('Email' , emailsSchema);

module.exports = {Email};