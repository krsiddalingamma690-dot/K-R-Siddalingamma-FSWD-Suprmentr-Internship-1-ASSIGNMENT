const express = require("express");
const router = express.Router();

let books = [];

// GET all books
router.get("/", (req, res) => {
    res.json(books);
});

// POST add book
router.post("/", (req, res) => {
    let book = req.body;
    books.push(book);
    res.json({ message: "Book added", book });
});

// PUT update book
router.put("/:id", (req, res) => {
    let id = req.params.id;
    books[id] = req.body;
    res.json({ message: "Book updated", books });
});

// DELETE book
router.delete("/:id", (req, res) => {
    let id = req.params.id;
    books.splice(id, 1);
    res.json({ message: "Book deleted", books });
});

module.exports = router;