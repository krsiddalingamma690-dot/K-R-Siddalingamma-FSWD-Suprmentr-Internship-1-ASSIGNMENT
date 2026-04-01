const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment'); // your Comment model

router.post('/', async (req, res) => {
    try {
        const comment = new Comment(req.body);
        const saved = await comment.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;