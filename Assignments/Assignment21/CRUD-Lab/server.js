const express = require("express");
const app = express();

require("./config/db");

app.use(express.json());

const studentRoutes = require("./routes/studentRoutes");

app.use("/students", studentRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});