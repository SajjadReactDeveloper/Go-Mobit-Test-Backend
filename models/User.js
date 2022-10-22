const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Please Enter Your Name"],
    },
    Email: {
        type: String,
        required: [true, "Please Enter Your Email"],
    },
    Cell: {
        type: String,
        required: [true, "Please Enter Your Cell Number"],
    },
    Age: {
        type: Number,
        required: [true, "Please Enter Your Age"],
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema);