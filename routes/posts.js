const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

//gets back all the post
router.get("/", (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
  });

//submits the post
  router.post('/', async (req,res)=>{
     const post = new Post({
         title:req.body.title,
         description: req.body.description
     });
     try{
        const savedPost = await post.save();
        res.json(savedPost);
     }catch(err){
         res.json({message: err});
     }
  });

  // specific post
  router.get('/:postId', async (req,res)=>{
     const post = await Post.findById(req.params.postId);
     try{
        res.json(post);
     }catch(err){
         res.json({message: err});
     }
     
  });

  //delete a specific post
  router.delete('/:postId', async (req,res)=>{
      try{
        const removePost = await Post.remove({_id: req.params.postId});
      }catch(err){
          res.json({message:err});
      }
      
  });

  // update Post
  router.patch('/:postId', async(req,res) =>{
      try{
        const updatePost = await Post.updateOne({_id:req.params.postId}, {$set: {title:"req.body.title"}});
        
        res.json(updatePost);
      }catch(err){
          res.json({message:err});
      }
     
  })
  module.exports = router;