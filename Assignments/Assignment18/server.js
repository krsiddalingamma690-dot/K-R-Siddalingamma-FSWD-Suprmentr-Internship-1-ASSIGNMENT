const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const taskRoutes = require("./TaskAPI/routes/taskRoutes");

// Use routes
app.use("/tasks", taskRoutes);

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});