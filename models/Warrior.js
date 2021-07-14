const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WarriorSchema = new Schema({
  string: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "What type of exercise would you like to do?"
      },
      name: {
        type: String,
        trim: true,
        required: "What is this exercise called?"
      },
      duration: {
        type: Number,
        required: "What is the duration of this excersise?"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]

});

const Warrior = mongoose.model("Warrior", WarriorSchema);

module.exports = Warrior;