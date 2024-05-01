const mongoose = require("mongoose");

const { Schema } = mongoose;

const allergySchema = new Schema({
  name: {
    type: String,
    required: [true, "A first and last name is required."],
    minLength: [1, "Minimum one character"],
  },
  email: {
    type: String,
    required: [true, "An email is required"],
    minLength: [1, "Minimum one character"],
  },

  bio: {
    type: String,
    required: [true, "A bio is required"],
    minLength: [10, "Minimum 10 characters"],
  },
});

const Allergy = mongoose.model("Allergy", allergySchema);

module.exports = Allergy;