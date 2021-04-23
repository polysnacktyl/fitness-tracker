const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./models");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/api.js"));
app.use(require("./routes/view"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

db.Workout.create({ name: "workout" })
  .then(workout => {
    console.log(workout);
  })
  .catch(({message}) => {
    console.log(message);
  });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});






