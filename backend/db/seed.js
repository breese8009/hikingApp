var models = require('../models');

let users ={
	name: "bryan",
	email: "reese",
	password: "1234",
	location: "sf Ca",
	profilePic: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg",
	hikingSpots: []
}
	

models.User.remove({}, function(err, user) {
  models.User.create(users, function(err, user) {
    if (err) {
      console.log(`Seeding textPosts failed: err =`);
      console.log(err)
      return;

    }
    console.log("Seeding textPosts successful");
    process.exit();
  });
});