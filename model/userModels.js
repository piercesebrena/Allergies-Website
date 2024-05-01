const mongoose = require("mongoose");
//const passport = require("passport"); //will define in Auth unit

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  googleId: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;