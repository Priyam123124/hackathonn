const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    phoneno: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    sports_prefrence1: {
        type: String,
        required: true
    },

    sports_prefrence2: {
        type: String,
    },

    sports_prefrence3: {
        type: String,
    },

    sports_prefrence4: {
        type: String,
    },

    sports_prefrence5: {
        type: String,
    },

    sports_prefrence6: {
        type: String,
    },

    date: {
        type: Date,
        default: new Date().toLocaleDateString('en-GB')
    }
});

// Creating a model by passing the schema object, not the schema name as a string
const User = mongoose.model("User", userSchema);

module.exports = User;
