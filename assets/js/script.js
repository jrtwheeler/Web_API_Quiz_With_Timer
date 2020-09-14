//Use querySelector to select the timer
var timerElement = document.querySelector(".timer");
//Use querySelector to select the timer
var cardText = document.querySelector(".question");
//Use querySelector to select the Submit button
var submitButton = document.querySelector(".btn");

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },

var timeLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
      timerElement.textContent = "Timer: 0:" + timeLeft;
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
        //window.open("high_score.html", "_self");
      }
  
    }, 1000);
  }

submitButton.addEventListener("click", function(){
    //Create a paragraph element
    var paragraph = document.createElement("p");
    //Add an class name to the new paragraph
    paragraph.id = "quiz_question"
    //Append the card text with the paragraph element
    cardText.appendChild(paragraph);
    //Use querySelector to select the new paragraph
    var questionParagraph = document.querySelector("#quiz_question");
    //Update the text content in cardText
    questionParagraph.textContent = "New";
    submitButton.textContent = "Submit";
}) 

function init (){
    setTime();

}

function setContent (){

}

function x () {

}

init ();
