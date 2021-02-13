// Get's question data
$.getJSON("http://localhost:4000/questions").done((questions) => {
  let tfQuestions = questions.tfQuestions;

  //Randomization of questions
  var tfRand = Math.floor(Math.random() * 10);
  document.getElementById("tfQuestion").innerHTML = tfQuestions[tfRand][0];

  //Checks to see if answer is correct
  $("#tfNextButton").click(function () {
    if (answer === tfQuestions[tfRand][1]) {
      $.ajax({
        type: "POST",
        url: "/update",
        data: { qData: "Correct" },
      });
    } else {
      $.ajax({
        type: "POST",
        url: "/update",
        data: { qData: "Wrong" },
      });
    }
    document.getElementById("trueFalse").style.display = "none";
    document.getElementById("dropDown").style.display = "block";
  });
});

//Shows submit button
function tfAnswerBTN() {
  document.getElementById("tfNextButton").style.display = "block";
}

//Checks user input
var answer = null;
$("#True").click(function () {
  answer = "True";
});
$("#False").click(function () {
  answer = "False";
});
