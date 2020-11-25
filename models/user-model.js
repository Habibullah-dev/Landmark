const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let usersSchema = new Schema({
    email : String,
    password : String
});

let User = mongoose.model('User' , usersSchema);

module.exports = {User};