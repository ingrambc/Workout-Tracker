const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define schema
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date()
  },

  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Enter exrecise type"
    },

    name: {
      type: String,
      trim: true,
      required: "Enter exercise name"
    },

    duration: {
      type: Number
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
  }]
},

{
  toJSON: {
  virtuals: true 
  }
});

//create computed totalDuration from exersises.duration
workoutSchema.virtual("totalDuration")
  .get(function() {
    return this.exercises.reduce((total, exercises) => {
      return total + exercises.duration;
  }, 0);
})

//define model
const Workout = mongoose.model("Workout", workoutSchema);

//export model
module.exports = Workout;