const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        require: true,
        max: 30
    },
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    workouts: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  }
);

module.exports = mongoose.model("User", userSchema);