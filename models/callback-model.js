const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let callbackSchema = new Schema({
    id: String ,
    phone: String,
    date: Date,
});

let Callback = mongoose.model('Callback' , callbackSchema);

module.exports = {Callback};