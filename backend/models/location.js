var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var LocationSchema = new Schema({
	city: String,
	near_address: String,
	description: String,
	photo: String,
	coordinates: String,
	user_id: String
});

var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;