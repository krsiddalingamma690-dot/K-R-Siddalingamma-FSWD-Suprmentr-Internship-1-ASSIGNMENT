const express = require("express");
const router = express.Router();

let authors = [];

// GET all authors
router.get("/", (req, res) => {
    res.json(authors);
});

// POST add author
router.post("/", (req, res) => {
    let author = req.body;
    authors.push(author);
    res.json({ message: "Author added", author });
});

// PUT update author
router.put("/:id", (req, res) => {
    let id = req.params.id;
    authors[id] = req.body;
    res.json({ message: "Author updated", authors });
});

// DELETE author
router.delete("/:id", (req, res) => {
    let id = req.params.id;
    authors.splice(id, 1);
    res.json({ message: "Author deleted", authors });
});

module.exports = router;