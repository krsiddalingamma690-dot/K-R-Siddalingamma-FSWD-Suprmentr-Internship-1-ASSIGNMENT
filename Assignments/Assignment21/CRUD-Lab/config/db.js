const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://krsiddalingamma690_db_user:nnpjDkXoLNxPkHw2@auth.ndny6tv.mongodb.net/")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

module.exports = mongoose;