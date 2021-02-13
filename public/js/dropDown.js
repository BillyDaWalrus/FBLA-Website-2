// Get's question data
$.getJSON("http://localhost:4000/questions").done((questions) => {
  let ddQuestions = questions.ddQuestions;

  //Randomization of questions
  var ddRand = Math.floor(Math.random() * 10);
  document.getElementById("ddQuestion").innerHTML = ddQuestions[ddRand][0];
  document.getElementById("A").value = ddQuestions[ddRand][1][0];
  document.getElementById("B").value = ddQuestions[ddRand][1][1];
  document.getElementById("C").value = ddQuestions[ddRand][1][2];

  //Check if answer is correct
  $("#ddNextButton").click(function () {
    if (
      document.getElementById("dropButton").value === ddQuestions[ddRand][2]
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
    document.getElementById("dropDown").style.display = "none";
    document.getElementById("trueFalse2").style.display = "block";
  });
});

//Show and hide answer options
$("#dropButton").click(function () {
  var x = document.getElementById("dropdownContent");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

//Change value of dropdown answer
$("#A").click(function () {
  var answer = document.getElementById("A").value;
  document.getElementById("dropButton").value = answer;
});
$("#B").click(function () {
  var answer = document.getElementById("B").value;
  document.getElementById("dropButton").value = answer;
});
$("#C").click(function () {
  var answer = document.getElementById("C").value;
  document.getElementById("dropButton").value = answer;
});

//Dropdown button function
function dd_answerBTN() {
  document.getElementById("dropdownContent").style.display = "none";
  document.getElementById("ddNextButton").style.display = "block";
}
