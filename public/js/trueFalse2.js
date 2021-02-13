// Get's question data
$.getJSON("http://localhost:4000/questions").done((questions) => {
  let tf2Questions = questions.tf2Questions;

  //Randomization of questions
  var tf2Rand = Math.floor(Math.random() * 10);
  document.getElementById("tf2Question").innerHTML = tf2Questions[tf2Rand][0];

  //Checks to see if answer is correct
  $("#tf2NextButton").click(function () {
    if (answer === tf2Questions[tf2Rand][1]) {
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
    document.getElementById("trueFalse2").style.display = "none";
    document.getElementById("results").style.display = "block";
  });
});

//Shows submit button
function tf2answerBTN() {
  document.getElementById("tf2NextButton").style.display = "block";
}

//Checks user input
var answer = null;
$("#True2").click(function () {
  answer = "True";
});
$("#False2").click(function () {
  answer = "False";
});
