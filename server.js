//required modules
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//define prot for process environment or local 8080
const PORT = process.env.PORT || 8080;

const app = express();

// setup express environment
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//connect to mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true
});

// get routes to use
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// open listener on server port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});