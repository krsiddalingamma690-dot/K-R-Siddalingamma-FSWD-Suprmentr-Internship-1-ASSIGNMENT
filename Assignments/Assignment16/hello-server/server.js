const express = require("express")
const app = express()

const PORT = 3000

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Hello Server 👋")
})

// About route
app.get("/about", (req, res) => {
    res.send("This is About Page 😶‍🌫️")
})

// Contact route
app.get("/contact", (req, res) => {
    res.send("Contact us at hello@gmail.com 📱")
})

// Services route
app.get("/services", (req, res) => {
    res.send("We provide web development services ✅")
})

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`)
})