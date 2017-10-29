var models = require('../models');

let users ={
	name: "bryan",
	email: "reese",
	password: "1234",
	location: "sf Ca",
	profilePic: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg",
	spots: []
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





















// let location= {
//   city: "SF",
//   near_address: "225 bush st",
//   description: "good place",
//   photo: "none",
//   long: "-122",
//   lat: "37",
// }

// models.Location.remove({}, function(err, location) {
//   models.Location.create(location, function(err, location) {

//     if (err) {
//       console.log(`Seeding textPosts failed: err =`);
//       console.log(err)
//       return;
//     }

// let user =[
// {
//   name: "bryan",
//   email: "reese",
//   password: "1234",
//   location: "sf Ca",
//   profilePic: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg",
//   spots: [location]
// }
// ]

//       models.User.remove({}, function(err, user) {
//   models.User.create(user, function(err, user) {
//     if (err) {
//       console.log(`Seeding textPosts failed: err =`);
//       console.log(err)
//       return;

//     }
//     console.log(user)
//     console.log("Seeding textPosts successful");
//     process.exit();
//   });
// });
//   });
// });








