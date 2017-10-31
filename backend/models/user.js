var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let locationSchema = require('./location').schema;

var UserSchema = new Schema({
	name: String,
	email: String,
	password: String,
	location: String,
	profilePic: String,
	spots: [locationSchema]
});

var User = mongoose.model('Users', UserSchema);

// User.findUserByEmail= (email, callback)=>{
// 	User.findOne(email, function (err, person) {
//   if (err) return console.log(err, "didnt work");
//   console.log(person)
//   // callback(person)
// })
// }

module.exports = User;
