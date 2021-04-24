const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  
});

app.use(require("./routes/api.js"));
app.use(require("./routes/view"));

db.Workout.create({ name: "workout" })
  .then(workout => {
    console.log(workout);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});