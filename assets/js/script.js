//Use querySelector to select the timer
var timerElement = document.querySelector(".timer");
//Use querySelector to select the timer
var cardText = document.querySelector(".question");
//Use querySelector to select the Submit button
var submitButton = document.querySelector(".btn");

var timeLeft = 10;

function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
      timerElement.textContent = timeLeft;
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
        window.open("https://www.w3schools.com", "_self");
        window.open("https://www.w3schools.com", "_self");
      }
  
    }, 1000);
  }

submitButton.addEventListener("mouseover", function(){ buttonColor(submitButton) });

function buttonColor(button) {
    button.style.backgroundColor = "red";
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
    submitButton.style.backgroundColor = "gray";
}) 

function init (){
    setTime();

}

function setContent (){

}

function x () {

}

init ();
