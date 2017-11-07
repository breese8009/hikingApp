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
        if(err) return handleError(err);
          for(let i=0; i<user.spots.length; i++){
            if(req.params.locations_id == user.spots[i]._id){
                user.spots.splice(i, 1)
                user.save()
            } 
          }

      
        });



      }



function update(req, res){
db.User.findById(req.params.users_id, function (err, user) {
  if (err) return handleError(err);
  else{
    for(let i = 0; i < user.spots.length; i++){
      if(user.spots[i]._id == req.params.locations_id){
        console.log(user.spots[i])
        user.spots[i].city = req.body.city
        user.spots[i].near_address = req.body.near_address
        user.spots[i].description = req.body.description
        user.spots[i].photo = req.body.photo

        user.save()
       
      } else{
        console.log(`there is no such id ${user.spots[i]._id}`)
      }
      
    }
}
});
}

      
module.exports.create = create;
module.exports.destroy = destroy;
module.exports.index = index;
module.exports.getAll = getAll;
module.exports.update = update;


