const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {
  useNewUrlParser: true,
  useFindAndModify: false
});

db.Workout.create({ name: 'workout'})
.then(dbWorkout => {
  console.log(dbWorkout);
})
.catch(({message}) => {
console.log(message);

});

// app.use(require("./routes/api.js"));
app.use(require("./routes/view"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
