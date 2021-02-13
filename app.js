const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const PORT = 4000;
const correct_data = "public/data/correct.json";
const questionData = "public/data/questions.json";
const bodyParser = require("body-parser");

// Uses bodyparser as middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Sets public as static directory
app.use("/", express.static(path.join(__dirname, "/public")));

// Checks to see if question was done right, if right increment correct by 1
// Also records which question was done right
app.post("/update", (req, res) => {
  let qData = req.body.qData;
  let rawdata = fs.readFileSync(correct_data);
  let data = JSON.parse(rawdata);
  let correctQuestions = data.qCorrect;
  if (qData === "Correct") {
    data.correct++;
  }
  correctQuestions.push(qData);

  let newdata = JSON.stringify({
    correct: data.correct,
    qCorrect: correctQuestions,
  });
  fs.writeFileSync(correct_data, newdata);
});

// Resets correct.json
app.post("/reset", (req, res) => {
  let newdata = JSON.stringify({
    correct: 0,
    qCorrect: [],
  });
  fs.writeFileSync(correct_data, newdata);
});

// Gets Correct Answer json
app.get("/correct", (req, res) => {
  let rawdata = fs.readFileSync(correct_data);
  let data = JSON.parse(rawdata);
  res.json(data);
});

// Gets questions data
app.get("/questions", (req, res) => {
  let rawdata = fs.readFileSync(questionData);
  let questions = JSON.parse(rawdata);
  res.json(questions);
});

// Tells us app is running and where
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}: http://localhost:${PORT}/`)
);
