//Use querySelector to select the timer
var timerElement = document.querySelector(".timer");
//Use querySelector to select the timer
var cardText = document.querySelector(".question");
//Use querySelector to select the Submit button
var submitButton = document.querySelector(".btn");

var myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];

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

function setContent(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  cardText.innerHTML = output.join('');
}

function init (){
  setTime();

  setContent ()

}

function x () {

}

init ();
