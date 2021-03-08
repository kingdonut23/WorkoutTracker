const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workout = new Schema ({
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
        type: Number

    },
    duration:{
        type: Number,
        required:"How long did you do this exercise?"
    },

    distance:{
        type: Number
    },

    day:{
        type: Date, 
        default: Date.now
    }

});

const WorkoutFitness = mongoose.model("workout", workout);

module.exports = WorkoutFitness;