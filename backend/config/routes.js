var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
var locationController = require('../controllers/location');
var models = require('../models');
var User = models.User;


// Configure the Digest strategy for use by Passport.
//
// The Digest strategy requires a `secret`function, which is used to look up
// user.  The function must invoke `cb` with the user object as well as the
// user's password as known by the server.  The password is used to compute a
// hash, and authentication will fail if the computed value does not match that
// of the request.  The user object will be set at `req.user` in route handlers
// after authentication.


// passport.use(new Strategy({ qop: 'auth' },
//   function(email, password, done) {
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
//       return done(null, user);
//     });
//   } 
// ))
// http://localhost:8080/api/user/59f6824c42cdb69de3e1140d

// passport.authenticate('basic', { session: false })


//user routes
router.post('/api/user', userController.create);
router.get('/api/user', userController.index);
router.get('/api/user/:users_id', userController.show);
router.put('/api/user/:users_id', userController.update);

router.delete('/api/user/:users_id', userController.destroy);




//locations routes

// router.get('/api/location', locationController.index);
router.post('/api/user/:users_id/location', locationController.create);
router.delete('/api/user/:users_id/location/:locations_id', locationController.destroy);
router.get('/api/user/:users_id/location', locationController.index);
router.get('/api/location', locationController.getAll);




module.exports = router;




