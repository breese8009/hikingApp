var models = require('../models');
var User = models.User;

function index(req, res) {
  User.find({}, function(err, users) {
    if (err) res.send(err);
    else res.json(users);
  });
}

function create(req, res){
	User.create(req.body, function(err, newUser) {
    if (err) { console.log('error', err); }
    console.log(newUser);
    res.json(newUser);
  });
}



module.exports.create = create;
module.exports.index = index;