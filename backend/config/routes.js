var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
var locationController = require('../controllers/location');
var models = require('../models');
var User = models.User;
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;
var LocalStrategy = require('passport-local').Strategy;


// Configure the Digest strategy for use by Passport.
//
// The Digest strategy requires a `secret`function, which is used to look up
// user.  The function must invoke `cb` with the user object as well as the
// user's password as known by the server.  The password is used to compute a
// hash, and authentication will fail if the computed value does not match that
// of the request.  The user object will be set at `req.user` in route handlers
// after authentication.




// passport.use(new Strategy({ usernameField: "email"},
//   function(email, password, done) {
//     console.log("got here")

//       User.findOne({ email: email }, function(err, user) {

//       if (err) { 
//         return done(err); 
//       }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (user.password !== password) {
//         return done(null, false, { message: 'Incorrect password.' });
//       } 
//       console.log(user)
//       return done(null, user);
//     });
//   } 
// ))





passport.use(new LocalStrategy({ usernameField: "email"},
  
  function(email, password, done) {
    console.log(password)
      User.findOne({ email: email }, function(err, user) {
        console.log("got here", user)
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Unknown user' });
        }
        if (password !== user.password) {
          return done(null, false, { message: 'Invalid password' });
        }
        console.log('I just wanna see foo! '); // this fails!
        return done(null, user);

      });
  } 
))


// passport.authenticate('basic', { session: false })


//user routes
router.post('/api/user', userController.create);
router.get('/api/user', userController.index);
router.get('/api/user/:users_id', userController.show);
router.delete('/api/user/:users_id', userController.destroy);




//locations routes

// router.get('/api/location', locationController.index);
router.post('/api/user/:users_id/location', locationController.create);
router.delete('/api/user/:users_id/location/:locations_id', locationController.destroy);
router.get('/api/user/:users_id/location', locationController.index);
router.get('/api/location', locationController.getAll);
router.put('/api/user/:users_id/location/:locations_id', locationController.update);



// router.post('/api/login', passport.authenticate('basic', { session: false }))
  router.post('/api/login', function(req, res, next) {
    passport.authenticate('local', {session:false}, function(err, user) {
      if (err) { return next(err) }
      res.json({email: req.body.email, password: req.body.password});
   })(req, res, next);

  });




module.exports = router;




