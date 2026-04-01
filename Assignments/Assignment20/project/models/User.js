const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    skills: [String]
});

module.exports = mongoose.model("User", userSchema);