const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    exercise:{
        type: String,
        trim: true,
        required: "Choose your exercise"
    },

    name:{
        type: String,
        trim: true,
        required: "What exercise?"
    },

    weight:{
        type:Number
    },

    reps:{
        type: Number
    },
    
    sets:{
        type:Number

    },
    duration:{
        type: Number,
        required:"How long did you do this exercise?"
    },

    distance:{
        type: Number
    },
///can't decide if I want the day to exist in the array or out
    day:{
        type: Date, 
        default: Date.now
    }

});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;