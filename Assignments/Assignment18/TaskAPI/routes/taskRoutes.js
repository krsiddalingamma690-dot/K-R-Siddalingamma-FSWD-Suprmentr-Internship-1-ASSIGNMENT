const express = require("express");
const router = express.Router();

let tasks = [];

// GET all tasks
router.get("/", (req, res) => {
    res.json(tasks);
});

// POST create task
router.post("/", (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.json({ message: "Task added", task });
});

// PUT update task
router.put("/:id", (req, res) => {
    const id = req.params.id;
    tasks[id] = req.body;
    res.json({ message: "Task updated", tasks });
});

// DELETE task
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    tasks.splice(id, 1);
    res.json({ message: "Task deleted", tasks });
});

module.exports = router;