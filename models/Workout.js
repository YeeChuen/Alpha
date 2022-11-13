const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema(
  {
    workoutCode: {
        type: String,
        require: true,
        unique: true
    },
    ownerID: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },
    exercises: {
        type: Array,
        default: []
    },
    workoutName: {
        type: String,
        require: true
    }
  }
);

module.exports = mongoose.model("Workout", WorkoutSchema);