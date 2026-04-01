// server.js

const express = require("express")
const app = express()
const PORT = 3000

const logger = require("./middleware/logger")
const userRoutes = require("./routes/userRoutes")

// use middleware
app.use(logger)

// use routes
app.use("/users", userRoutes)

// default route
app.get("/", (req, res) => {
    res.send("Welcome to Express Server")
})

// start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})