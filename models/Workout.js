
const mongoose = require("mongoose");


const WorkoutSchema = mongoose.Schema({
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
            sets: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            }, 
            distance: {
                type: Number
            }
        },

    ]
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;





