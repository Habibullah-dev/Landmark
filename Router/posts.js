const express = require('express');
let Post = require('../models/post-model').Post;
let uniqid = require('uniqid');
let router = express.Router();
let middleaware = require('../middleware/auth');


router.get('/' , async (req , res) => {
    let posts = await Post.find();
    res.send(posts);
      
  });
router.get('/:id' , async (req , res) => {
  let id = req.params.id;
  let post = await Post.findOne({id:id});
  res.send(post);

})
  
router.post('/' , middleaware , async (req , res) => {
      let reqBody = req.body;
      let imgPath;
      if(reqBody.imageUrl) {
          imgPath = reqBody.imageUrl;
      }else {
         imgPath = req.file.path.substring(req.file.path.indexOf('c') + 1 , req.file.path.length);
      }
      let newPost = new Post({
          id : uniqid() ,
          title : reqBody.title,
          place :reqBody.place,
          date : new Date(),
          text : reqBody.text,
          image : imgPath ,
          description : reqBody.description
      
      });
  
      await newPost.save();
      res.send('Created');
  
  });
  router.delete('/:id',middleaware , async(req , res) => {
    let id = req.params.id;
    await Post.deleteOne({id : id});
    res.send('Deleted');
  })
  router.put('/:id', middleaware ,async (req , res) => {
    let id = req.params.id;
    let reqBody = req.body;
    await Post.updateOne({id : id} , reqBody);
    res.send('Updated');

  });


module.exports = router