// Get's question data
$.getJSON("http://localhost:4000/questions").done((questions) => {
  let mcQuestions = questions.mcQuestions;

  //Randomization of questions
  var mcRand = Math.floor(Math.random() * 10);
  document.getElementById("mcQuestion").innerHTML = mcQuestions[mcRand][0];
  document.getElementById("mc_A").value = mcQuestions[mcRand][1][0];
  document.getElementById("mc_B").value = mcQuestions[mcRand][1][1];
  document.getElementById("mc_C").value = mcQuestions[mcRand][1][2];
  document.getElementById("mc_D").value = mcQuestions[mcRand][1][3];

  //Compares if the answer is correct
  $("#mcNextButton").click(function () {
    if (mc_answer === mcQuestions[mcRand][2]) {
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
    document.getElementById("multipleChoice").style.display = "none";
    document.getElementById("fillBlanks").style.display = "block";
  });
});

//Gets user's input
var mc_answer = null;
$("#mc_A").click(function () {
  mc_answer = document.getElementById("mc_A").value;
});
$("#mc_B").click(function () {
  mc_answer = document.getElementById("mc_B").value;
});
$("#mc_C").click(function () {
  mc_answer = document.getElementById("mc_C").value;
});
$("#mc_D").click(function () {
  mc_answer = document.getElementById("mc_D").value;
});

//Shows submit button
function answerBTN() {
  document.getElementById("mcNextButton").style.display = "block";
}
