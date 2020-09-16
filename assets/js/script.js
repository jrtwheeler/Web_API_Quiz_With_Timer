//Use querySelector to select the timer
var timerElement = document.querySelector(".timer");
//Use querySelector to select the timer
var cardText = document.querySelector(".question");
//Use querySelector to select the Submit button
var submitButton = document.querySelector(".btn");

//Object of questions, answers, correct answer
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
    question: "Which one of these is one of three languages all web developers must learn?",
    answers: {
      a: "Javascript",
      b: "CSS",
      c: "HTML",
      d: "All of the above"
    },
    correctAnswer: "c"
  },
  {
    question: "How is a comment written in Javascript?",
    answers: {
      a: "//",
      b: "<-- -->",
      c: "/*",
      d: "@Comment"
    },
    correctAnswer: "a"
  },
  {
    question: "JavaScript variables are containers for storing:",
    answers: {
      a: "data values",
      b: "strings",
      c: "booleans",
      d: "numbers"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following is not a Javascript operator",
    answers: {
      a: "+",
      b: "**",
      c: "~",
      d: "%"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of the following best defines a primitive data type?",
    answers: {
      a: "A primitive data value is a single simple data value with additional properties and methods.",
      b: "A primitive data value is a single simple data value with no additional properties and methods.",
      c: "A primitive data value is a single simple data value.",
      d: "A primitive data value is a function or object."
    },
    correctAnswer: "b"
  },
  {
    question: "When is a function invoked?",
    answers: {
      a: "When it is assigned to a const variable.",
      b: "When an event occurs (when a user clicks a button).",
      c: "When it is invoked (called) from JavaScript code.",
      d: "Both b and c."
    },
    correctAnswer: "d"
  },
  {
    question: "When is a function invoked?",
    answers: {
      a: "When it is assigned to a const variable.",
      b: "When an event occurs (when a user clicks a button).",
      c: "When it is invoked (called) from JavaScript code.",
      d: "Both b and c."
    },
    correctAnswer: "d"
  },
  {
    question: "How can you access object properties?",
    answers: {
      a: "objectName.propertyName.",
      b: "Invoking the object.",
      c: "objectName['propertyName'].",
      d: "Both a and c."
    },
    correctAnswer: "d"
  },
  {
    question: "Which of the following is not a Javascript event?",
    answers: {
      a: "onmouseover",
      b: "onrange",
      c: "onchange",
      d: "onclick"
    },
    correctAnswer: "b"
  },
];

var timeLeft = 60;
//This is the introductory paragraph
var myIntro = "Try to answer the following coding questions in one minute. Every wrong answer takes ten seconds from the timer. Press start to begin."

//The timer function. The timer function starts running when the user clicks the Start button and is called in function startScreen();
function setTime() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timerElement.textContent = "Timer: 0:" + timeLeft;
    
    if(timeLeft < 10) {
      timerElement.textContent = "Timer: 0:0" + timeLeft;
    }
    if(timeLeft === 0) {
      clearInterval(timerInterval);
      //window.open("high_score.html", "_self");
    }
  
  }, 1000);
}

function startScreen (content) {
  //var paragraph = document.createElement("p");
  //Add an class name to the new paragraph
  //paragraph.id = "quiz_question"
  //Append the card text with the paragraph element
  //cardText.appendChild(paragraph);
  //Use querySelector to select the new paragraph
  //var questionParagraph = document.querySelector("#quiz_question");
  //Update the text content in cardText
  cardText.textContent = content;
  cardText.setAttribute("style", "text-align: center;");
  cardText.setAttribute("style", "font-size: 16px;");
}

//Start button is called in init. It sets up the start screen.
function startButton (){
  startScreen (myIntro);
  submitButton.addEventListener("click", function(){
    setTime();
  })
}

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

function showResults(){

  // gather answer containers from our quiz
  const answerContainers = cardText.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function init (){
  startButton ();

}

function x () {

}

init ();
