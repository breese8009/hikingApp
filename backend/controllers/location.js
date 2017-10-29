var db = require('../models');
var User = db.User;
function index(req, res) { 

  db.Location.find({ User_id: req.query.user_id }, function(err, locations) {

    if (err) res.send(err);
    else res.json(locations);
  });
}




function create(req, res) {

  console.log("Entering comments create()");

  db.Location.create(req.body, function(err, newLocation) {
    if (err) {
      console.log(`Location create() failed with err = ${err}`);
      res.sendStatus(404);
    }


 db.User.findById(req.params.users_id, function(err, user) {
  console.log(req.params.users_id)
      if (err) {
        console.log(`could not find ${req.params.users_id} id in db`);
        res.sendStatus(404);
      }
      console.log(user)
      
    });

 });
      }



   // console.log(`new location ${newLocation} created`);

    //search the db for the style we want to add the new school to

// models.User.findById(req.params.User_id, function(err, user){
//   if(err) console.log(err, "did not get any id")
//     else console.log(user)
// })
   
// let id = "59f50039d27c8c5f51a0da28"
 // user.spots.push(newLocation);
      // console.log(user.spots)
      // user.save();
      // res.json(newLocation);


// module.exports.index = index;
module.exports.create = create;