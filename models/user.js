const   mongoose                = require("mongoose"),
        passportLocalMongoose   = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose); // adds methods from passport local mongoose to this schema

module.exports = mongoose.model("User", UserSchema);