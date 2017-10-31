var db = require('../models');


function index(req, res) {

  db.User.findById(req.params.users_id).populate('locations')
    .exec(function(err, user) {
      if (err) {
        console.log(`school index(): err = ${err}`);
        res.sendStatus(404);
      }

      res.json(user.spots);
    });
}


function getAll(req, res) {
  db.Location.find({}, function(err, locations) {
    if (err) {
      console.log(`school getallschools(): found no school in db`);
      res.sendStatus(404);
    }

    res.json(locations);
  });
}


function create(req, res) {

  db.Location.create(req.body, function(err, newLocation) {
    if (err) {
      console.log(`Location create() failed with err = ${err}`);
      res.sendStatus(404);
    }
console.log(newLocation)

 db.User.findById(req.params.users_id, function(err, user) {
  
   if (err) {
    return handleError(err);
  }
else{
  
      user.spots.push(newLocation)
      user.save()
      res.json(newLocation)
      console.log(user)
    }
    });

 });
      }



      function destroy(req, res){
        db.User.findById(req.params.users_id, function(err, user){
          if(err) return handleError(err)
          console.log(user)
        });
      }

function getUserLocations(req, res){
  db.User.findById(req.params.users_id, function(err, user){
          if(err) return handleError(err)
          console.log(user)
        });
}

   





module.exports.create = create;
module.exports.destroy = destroy;
module.exports.index = index;
module.exports.getAll = getAll;
module.exports.getUserLocations = getUserLocations;


