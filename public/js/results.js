// Try Again Button
document.getElementById("resultsNextButton").style.display = "block";
$("#resultsNextButton").click(function () {
  location.reload();
});

//Checks number of correct answers and calculates percentage
$("#hidden").click(function () {
  // Gets JSON data
  $.getJSON("../data/correct.json").done((dataCorrect) => {
    let percentage = (dataCorrect.correct / 5) * 100 + "%";
    document.getElementById("percentage").innerHTML = percentage;
  });

  // Get data on which question were answered correctly
  $.getJSON("../data/correct.json").done((qData) => {
    //Stores correct/wrong answers into variables
    correctAnswers = qData.qCorrect;
    q1 = correctAnswers[0];
    q2 = correctAnswers[1];
    q3 = correctAnswers[2];
    q4 = correctAnswers[3];
    q5 = correctAnswers[4];

    //Displays variables onto site
    document.getElementById("q1").innerHTML = q1;
    document.getElementById("q2").innerHTML = q2;
    document.getElementById("q3").innerHTML = q3;
    document.getElementById("q4").innerHTML = q4;
    document.getElementById("q5").innerHTML = q5;
  });

  // Hides the hidden element
  document.getElementById("hidden").style.display = "none";
});
