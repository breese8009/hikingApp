var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PassportSchema = new Schema({
	email: String,
	password: String
});

var Passport = mongoose.model('Passport', PassportSchema);


module.exports = Passport;