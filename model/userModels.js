const mongoose = require("mongoose");
const passport = require("passport"); //will define in Auth unit

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: Buffer,
  },
  salt: {
    type: Buffer
  },
  strategy: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;