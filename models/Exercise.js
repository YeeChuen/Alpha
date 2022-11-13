const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    exerciseCode: {
        type: String,
        unique: true
    },
    weights: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        require: true,
    },
    reps: {
        type: Number,
        require: true
    },
    restTime: {
        type: Number,
        default: 0
    }
  }
);

module.exports = mongoose.model("Exercise", exerciseSchema);