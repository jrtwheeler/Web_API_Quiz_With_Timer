var scoreOutput = document.querySelector("#score");
var scoreInput = document.querySelector("#score-text");
var scoreForm = document.querySelector("#score-form");
var scoreList = document.querySelector("#score-list");
var clearButton = document.querySelector(".btn");
var restartButton = document.querySelector("#restart");

var scoreArray = [];
var score = localStorage.getItem("scoreCounter");
scoreOutput.textContent = "Final Score: " + score;
var entries = [];

init();

function renderScores() {
  // Clear scoreList element
  scoreList.innerHTML = "";


  // Render a new li for each score
  for (var i = 0; i < scoreArray.length; i++) {
    var todo = scoreArray[i] + ' ' + score;

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    scoreList.appendChild(li);
  }
}

function init() {
  // Get stored scoreArray from localStorage
  // Parsing the JSON string to an object
  var storedScores = JSON.parse(localStorage.getItem("scoreList"));

  // If scoreArray were retrieved from localStorage, update the scoreArray to it
  if (storedScores !== null) {
    scoreArray = storedScores;
  }

  // Render scores to the DOM
  renderScores();
}

function storeScores() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("scoreList", JSON.stringify(scoreArray));
}

// When form is submitted...
scoreForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var scoreText = scoreInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (scoreText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  scoreArray.push(scoreText);
  scoreInput.value = "";

  // Store updated scores in localStorage, re-render the list
  storeScores();
  renderScores();
});

clearButton.addEventListener("click", function(){
  scoreArray = [];
  renderScores();
})

restartButton.addEventListener("click", function(){
  window.open("index.html", "_self");
})