const mongoose = require("mongoose");

const { Schema } = mongoose;

const allergySchema = new Schema({
  firstName: {
    type: String,
    required: [true, "A first name is required"],
    minLength: [1, "Minimum one character"],
  },
  lastName: {
    type: String,
    required: [true, "A last name is required"],
    minLength: [1, "Minimum one character"],
  },
  birthYear: {
    type: Number,
    required: [true, "The birth year is required"],
    minLength: [4, "Enter full year of birth"],
    maxLength: [4, "Enter full year of birth"],
  },
  bio: {
    type: String,
    required: [true, "A bio is required"],
    minLength: [10, "Minimum 10 characters"],
  },
});

const Allergy = mongoose.model("Allergy", allergySchema);

module.exports = Allergy;