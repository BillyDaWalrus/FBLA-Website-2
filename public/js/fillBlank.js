// Get's question data
$.getJSON("http://localhost:4000/questions").done((questions) => {
  let fbQuestions = questions.fbQuestions;

  //Randomization of questions
  var fbRand = Math.floor(Math.random() * 10);
  document.getElementById("part1").innerHTML = fbQuestions[fbRand][0];
  document.getElementById("part2").innerHTML = fbQuestions[fbRand][1];

  //Compares if the answer is correct
  $("#fbNextButton").click(function () {
    fbCorrectAnswer = document.getElementById("fbAnswer").value.toLowerCase();
    if (
      fbCorrectAnswer.replace(/\s/g, "") ===
      fbQuestions[fbRand][2].toLowerCase()
    ) {
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
    document.getElementById("fbAnswer").value = "";
    document.getElementById("fillBlanks").style.display = "none";
    document.getElementById("trueFalse").style.display = "block";
  });
});

// Checks to see if there's text within input
$(document).ready(function () {
  $("#fbAnswer").on("input", function () {
    document.getElementById("fbNextButton").style.display = "inline-block";
  });
});
