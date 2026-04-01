const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

/* =========================
   MongoDB Connection
========================= */
mongoose.connect("mongodb+srv://krsiddalingamma690_db_user:xVFjbcfNrtNrXitN@cluster0.g6st1aj.mongodb.net/")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

/* =========================
   Schema & Model
========================= */
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    skills: [String]
});

const User = mongoose.model("User", userSchema);

/* =========================
   Routes (Postman use)
========================= */

// POST → Create User
app.post("/api/users", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json({ message: "User created", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET → Get Users
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




/* =========================
   Server Start
========================= */
app.listen(3000, () => {
    console.log("Server running on port 3000");
});