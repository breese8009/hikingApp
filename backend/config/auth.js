 var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy
var models = require('../models');
var User = models.User;
        // user = { // This a hard-coded user
        //     _id: 1,
        //     username: 'john',
        //     email: 'john@doe.com',
        //     password: 'password'
        // };

    // Register a login strategy
    passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
        function(email, password, done) {
            console.log(email)
      User.findOne({ email: email }, function(err, user) {

      if (err) { 
        return done(err); 
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  } 
    ));

    // Required for storing user info into session 
    passport.serializeUser(function(user, done) {
      done(null, user._id);
    });
     
    // Required for retrieving user from session
    passport.deserializeUser(function(id, done) {
        // The user should be queried against db
        // using the id
        done(null, user);
    });

    module.exports = passport;