var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var LocationSchema = new Schema({
	city: String,
	near_address: String,
	description: String,
	photo: String,
	long: String,
	lat: String
});

var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;