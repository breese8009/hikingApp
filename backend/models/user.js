var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	email: String,
	password: String,
	location: String,
	profilePic: String,
	hikingSpots: []
});

var User = mongoose.model('Users', UserSchema);

module.exports = User;