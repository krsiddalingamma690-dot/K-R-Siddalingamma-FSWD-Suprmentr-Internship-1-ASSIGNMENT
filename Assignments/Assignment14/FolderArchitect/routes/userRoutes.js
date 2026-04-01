// routes/userRoutes.js

const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    const users = [
        { id: 1, name: "Navya", dept: "CS" },
        { id: 11, name: "Manoj", dept: "Mech" }
    ]
    res.json(users)
})

router.get("/:id", (req, res) => {
    res.send(`User ID: ${req.params.id}`)
})

module.exports = router