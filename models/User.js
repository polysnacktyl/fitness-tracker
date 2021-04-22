
const mongoose = require("mongoose");
const Workout = require("./Workout.js");

const UserSchema = mongoose.Schema({
    username: String, 
    workouts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Workout
    }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
