
const mongoose = require("mongoose");

const WorkoutSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    day: {
        type: String,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "specify a workout type"
            },
            name: {
                type: String,
                trim: true,
                required: "enter workout name"
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
            duration: {
                sets: Number
            }
        },

    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;





