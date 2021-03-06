var models = require('../models');
var User = models.User;
var expressValidator = require('express-validator')
var bcrypt = require('bcrypt')
var passport = require('passport')
const saltRounds = 10;
var Strategy = require('passport-http').BasicStrategy;
var LocalStrategy = require('passport-local').Strategy;





function index(req, res) {
  User.find({}, function(err, users) {
    if (err) res.send(err);
    else res.json(users);
  });
}





function create(req, res){

User.findOne({email: req.body.email}, function(err, foundUser){
  if(err){
    throw err;
  } else if(foundUser === null){

User.create(req.body, function(err, newUser) {
    if (err) { console.log('error', err); }
    console.log(newUser);
    res.json(newUser);
  });

  }

  else{
    console.log(`${foundUser} is already in use, please try again`)
    return;
  }
})


}




function getUser(req, res){
 
  User.findOne({email:req.body.email}, function(err, user){
    if(err) throw err;
    else 
      console.log(user)
  })
}


// function create(req, res){
// bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//   User.create({
//     email: req.body.email, password: hash, location: req.body.location, profilePic: req.body.profilePic, name: req.body.name},
//      function(err, newUser) {
//     if (err) { console.log('error', err); }
//     else{
//     res.json(newUser)
// }
// });

// });

  
// }



function show(req, res) {
  console.log("Entering style show()");

  User.findById(req.params.users_id, function(err, user) {
    if (err) {
      console.log(`Post id: ${req.params.users_id} not found`);
    }

    console.log(`db returned with style info: ${user}`);
    res.json(user);
  });
}

function update(req, res) {
  User.findById(req.params.users_id, function(err, foundUser) {

    if (err) {
      res.sendStatus(404);
    }
    let user = req.body.user
    foundUser.name = user.name;
    foundUser.email = user.email;
    foundUser.password = user.password;
    foundUser.profilePic = user.profilePic;
    foundUser.location = user.location;
    foundUser.hikingSpots = user.hikingSpots;

   foundUser.save(function(err, savedUser) {
      if (err) {
        console.log(`style update() failed db save with err: ${err}`);
        res.sendStatus(404);
      }
      console.log(`successfully updated style as ${savedUser}`);
      res.json(savedUser);
    });
  });
}

function destroy(req, res) {
    
    User.findByIdAndRemove(req.params.users_id, function(err, deletedUser) {
      if (err) {
        console.log(`failed to remove style ${req.params.users_id} from db`);
        res.sendstatus(404);
      }

      console.log(`successfully removed style ${deletedUser} from db`);
      res.json(deletedUser);
    });
}





passport.serializeUser(function(id, done) {
  done(null, id)
})

passport.deserializeUser(function(id, done) {
  done(err, id);
})


module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
module.exports.getUser = getUser;




