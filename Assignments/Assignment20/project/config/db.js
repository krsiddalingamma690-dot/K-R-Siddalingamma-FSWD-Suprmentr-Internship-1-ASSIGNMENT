const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://krsiddalingamma690_db_user:xVFjbcfNrtNrXitN@cluster0.g6st1aj.mongodb.net/");
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;