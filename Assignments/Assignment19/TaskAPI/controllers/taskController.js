const tasks = require("../models/taskModel");

// GET all tasks
exports.getTasks = (req, res) => {
    res.json(tasks);
};

// POST add task
exports.addTask = (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.json({ message: "Task added", task });
};

// PUT update task
exports.updateTask = (req, res) => {
    const id = req.params.id;
    tasks[id] = req.body;
    res.json({ message: "Task updated", tasks });
};

// DELETE task
exports.deleteTask = (req, res) => {
    const id = req.params.id;
    tasks.splice(id, 1);
    res.json({ message: "Task deleted", tasks });
};