const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const {withAuth, withAuthApi } = require('../utils/auth');



router.get('/', (req, res) => {

  res.render('homepage', {

    logged_in: req.session.logged_in
     
  });
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/gallery');
    return;
  }

  res.render('login');
});

//gallery route
router.get('/gallery', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
     where: {
         user_id: req.session.user_id
     }
    });

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    res.render('gallery', {
      layout: 'main',
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Post posting Route
router.get('/post/:id', withAuth, async (req, res) => {
  Post.findByPk(req.params.id, {
       include: [
       User,
         {
           model: Comment,
           include: {
              model: User
           }
         },
         
       ],
     })
     .then((dbPostData) => {
       if (dbPostData) {
         const post = dbPostData.get({ plain: true });

         console.log(post)
 
         res.render("post", { 
           post,
           logged_in: req.session.logged_in });
       } else {
         res.status(404).end();
       }
     })
     .catch((err) => {
       res.status(500).json(err);
     });
 });

module.exports = router;

