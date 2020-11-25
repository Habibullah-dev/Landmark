const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let postSchema = new Schema({
    id : String,
    title : String,
    place : String,
    date : Date,
    text : String,
    image : String,
    description : String
});

let Post = mongoose.model('Post' , postSchema);

module.exports = {Post};