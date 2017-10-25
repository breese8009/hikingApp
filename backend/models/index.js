var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/frontend");

module.exports.User = require("./user");
module.exports.Location = require("./location");