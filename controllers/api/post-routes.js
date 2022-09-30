const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const {withAuth, withAuthApi } = require('../../utils/auth');



//create new post
router.post('/', withAuthApi, async (req, res) => {
    try {
      const postData = await Post.create({...req.body, user_id: req.session.user_id});
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // //FOR FUTURE DEVELOPMENT: edit post
  // router.put('/:id', withAuth, async (req, res) => {
  //   // edit post by its `id` value
  //   try {
  //     const postData = await Post.update(req.body,{
  //       where: {
  //         id: req.params.id
  //       }
  //     });
  
  //     if (!postData) {
  //       res.status(404).json({ message: 'No post found with this id!' });
  //       return;
  //     }
  
  //     res.status(200).json(postData);
  //   } catch (err) {
  //     res.status(500).json(err.message);
  //   }
  // });

  //delete post 
  router.delete('/:id', withAuth, async (req,res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id
        }
      });

      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      console.error(err);
      res.status(500).json(err.message);
    }
  });

  module.exports = router