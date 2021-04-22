
const mongoose = require("mongoose");

const WorkoutSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;





