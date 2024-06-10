const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {

  try{
      const dbPostData = await Post.findAll({
          include: [
              {
                  model: User,
                  attributes: ['username', 'id']
              },
          ],
      });
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render('homepage', {
          posts,
          loggedIn: req.session.loggedIn,
          userId: req.session.userId,
          showLogout: true
      });
  }catch (error) {
      console.log(error);
      res.status(500).json(error);
  }
})

router.get('/dashboard', withAuth, async (req,res) => {
  try{
      const dbUserData = await Post.findAll({
          where: { user_id: req.session.userId }
      })

      const posts = dbUserData.map((post) => post.get({ plain: true }));
      
      res.render('dashboard', {
          posts,
          loggedIn: req.session.loggedIn,
          showLogout: true
      })

  } catch (error) {
      console.error(error);
      res.status(500).json(error)
  }
})

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      console.log('logged in');
      res.redirect('/');
      return;
  }

  res.render('login');
})

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
      console.log('logged in');
      res.redirect('/');
      return;
  }

  res.render('signup');
})

router.get('/posts/:id', async (req, res) => {
  try{
      const dbCommentData = await Comment.findAll({
          where: {
              post_id: req.params.id
          },
          include: [
              {
                  model: User,
                  attributes: ['username'],
              }
          ]
      })
      req.session.postId = req.params.id;

      const comments = dbCommentData.map((comment) => comment.get({ plain: true }));

      const dbPostData = await Post.findByPk(req.params.id, {
          include:[
              {
                  model: User,
                  attributes: ['username']
              }
          ]});
      const post = dbPostData.get({ plain: true });

      res.render('post', {
          loggedIn: req.session.loggedIn,
          showDashboard: false,
          postId: req.session.postId,
          post,
          comments,
          notPublic: true

      })

  } catch (error) {
      console.error(error);
      res.status(500).json(error);
  }
});


router.get('/newpost', withAuth, (req, res) => {
  res.render('newpost', {
      userId: req.session.userId,
      loggedIn: req.session.loggedIn,
      showDashboard: false
  })
})

router.get('/newcomment', withAuth, async (req, res) => {

  const dbPostData = await Post.findByPk(req.session.postId, {
      include: [
          {
              model: User,
              attributes: ['username']
          }
      ]
  });
  const post = dbPostData.get({ plain: true });

  res.render('newcomment', {
      loggedIn: req.session.loggedIn,
      showDashboard: false,
      postId: req.session.postId,
      post
  });
})

router.get('/editpost/:id', withAuth, async (req, res) => {
    try{

        req.session.postId = req.params.id;

        const dbPostData = await Post.findByPk(req.session.postId, {
            include:[
                {
                    model: User,
                    attributes: ['username']
                }
            ]});
        const post = dbPostData.get({ plain: true });


        // renders the post template and passes in variables, postId is created as a session variable here which will be used to create new comments related to this post
        res.render('editpost', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            post,
            notPublic: true
        })

    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});
//all CS routes

router.get('/compsci', async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'cs'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('compsci', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts,
            showCs: true
        })
    } catch (error){
        res.status(500)
    }
})

// all SD routes
router.get('/softwaredev', async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'sd'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('softwaredev', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts,
            showSd: true
        })
    } catch (error){
        res.status(500)
    }
})

//all WD routes
router.get('/webdev', async (req, res) => {

    try{
        const dbPostData = await Post.findAll({
            where: {
                post_state: 'wd'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('webdev', {
            loggedIn: req.session.loggedIn,
            showDashboard: false,
            postId: req.session.postId,
            posts,
            showWd: true
        })
    } catch (error){
        res.status(500)
    }
})

module.exports = router;

