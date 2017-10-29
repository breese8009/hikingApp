var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let Location = require('./location')

var UserSchema = new Schema({
	name: String,
	email: String,
	password: String,
	location: String,
	profilePic: String,
	spots: [{type: Schema.Types.ObjectId, ref: 'Location'}]
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