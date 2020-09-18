//Object of questions, answers, correct answer
var myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Steve Jobs"
    },
    correctAnswer: "Douglas Crockford"
  },
  {
    question: "Which one of these is one of three languages all web developers must learn?",
    answers: {
      a: "Javascript",
      b: "CSS",
      c: "HTML",
      d: "All of the above"
    },
    correctAnswer: "All of the above"
  },
  {
    question: "How is a comment written in Javascript?",
    answers: {
      a: "//",
      b: "<-- -->",
      c: "/*",
      d: "@Comment"
    },
    correctAnswer: "//"
  },
  {
    question: "JavaScript variables are containers for storing:",
    answers: {
      a: "data values",
      b: "strings",
      c: "booleans",
      d: "numbers"
    },
    correctAnswer: "data values"
  }
];
//Use querySelector to select the timer
var timerElement = document.querySelector(".timer");
//Use querySelector to select the timer
var cardText = document.querySelector(".question");
//Use querySelector to select the Submit button
var submitButton = document.querySelector(".btn");
//Set the start time for the timer. When the timer reaches 0 the script will end.
var timeLeft = 60;
//Set the score counter
var scoreCounter = 0;
//Set the question counter
var questionCounter = 0;
//Set the length of the quiz. When the user answers the number of questions that equal the length of the quiz, the quiz will end.
var quizLength = myQuestions.length;
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
      window.open("high_score.html", "_self");
    }
  
  }, 1000);
}

//Set the styling for the start screen intro paragraph
function startScreen (content) {
    cardText.textContent = content;
    cardText.setAttribute("style", "text-align: center;");
    cardText.setAttribute("style", "font-size: 16px;");
}

//Start button is called in init. It sets up the start screen.
function startButton (){
  
  submitButton.addEventListener("click", function(){
    //Call the setTime function to start the timer
    setTime();
    //Call the setContent button to start the quiz section
    setContent();
    //hide Start button
    submitButton.style.display = 'none';
  })
}

//The set content function takes data from the myQuestions object to start the quiz 
function setContent(){

  //if the questionCounter is less than the length of the quiz ...
  if (questionCounter < quizLength){
  //Clear the cardText text content
  cardText.textContent = "";
  //Q is the question at the questionCounter array position. Each time the user answers a question, one is added to the question counter, moving onto the next question
  var q = myQuestions[questionCounter];
  //Create a paragraph element
  var questionParagraph = document.createElement("p");
  //Give the paragraph element an id
  questionParagraph.id = "quiz_question";
  //Append the paragraph element to the cardText
  cardText.appendChild(questionParagraph);
  //Select the paragraph element by id
  var questionParagraphSelector = document.querySelector("#quiz_question");
  //Put the question from the the myQuestion object into the newly created paragraph element
  questionParagraphSelector.textContent = q.question;
  //Create a list element
  var myList = document.createElement("UL");
  questionParagraphSelector.appendChild(myList);

  var listItemOne = document.createElement("LI");
  myList.appendChild(listItemOne);
  var buttonOne = document.createElement("BUTTON");
  listItemOne.appendChild(buttonOne);
  buttonOne.id = "quiz_button";
  buttonOne.textContent = q.answers.a;
  buttonOne.addEventListener("click", function(){
    if(q.answers.a === q.correctAnswer){
      helper ("Right answer:");
    } else {
      wrongAnswer ();
    }
     
  })

  var listItemTwo = document.createElement("LI");
  myList.appendChild(listItemTwo);
  var buttonTwo = document.createElement("BUTTON");
  listItemTwo.appendChild(buttonTwo);
  buttonTwo.id = "quiz_button";
  buttonTwo.textContent = q.answers.b;
  buttonTwo.addEventListener("click", function(){
    if(q.answers.b === q.correctAnswer){
      helper ("Right answer:");
    } else {
      wrongAnswer ();
    }
     
  })

  var listItemThree = document.createElement("LI");
  myList.appendChild(listItemThree);
  var buttonThree = document.createElement("BUTTON");
  listItemThree.appendChild(buttonThree);
  buttonThree.id = "quiz_button";
  buttonThree.textContent = q.answers.c;
  buttonThree.addEventListener("click", function(){
    if(q.answers.c === q.correctAnswer){
      helper ("Right answer:");
    } else {
      wrongAnswer ();
    }
     
  })

  var listItemFour = document.createElement("LI");
  myList.appendChild(listItemFour);
  var buttonFour = document.createElement("BUTTON");
  listItemFour.appendChild(buttonFour);
  buttonFour.id = "quiz_button";
  buttonFour.textContent = q.answers.d;
  buttonFour.addEventListener("click", function(){
    if(q.answers.d === q.correctAnswer){
      helper ("Right answer:");
    } else {
      wrongAnswer ();
    }
     
  })
} else {
  localStorage.setItem("scoreCounter", scoreCounter)
  window.open("high_score.html", "_self");
}

function helper (answer) {
  var listItemAnswer = document.createElement("LI");
  myList.appendChild(listItemAnswer);
  listItemAnswer.id = "quiz_answer";
  listItemAnswer.textContent = answer + " " + q.correctAnswer;
  console.log(q.correctAnswer)
  setTimeout(function(){ 
    scoreCounter +=1;
    questionCounter ++; 
    setContent();}, 2000);
}

function wrongAnswer (){
  var listItemAnswer = document.createElement("LI");
  myList.appendChild(listItemAnswer);
  listItemAnswer.id = "quiz_answer";
  listItemAnswer.textContent = "Wrong answer";
  console.log(q.correctAnswer)
  setTimeout(function(){ 
    questionCounter ++; 
    timeLeft -=10;
    setContent();}, 2000);
}
}

function init (){
  startScreen (myIntro);
  startButton ();
}


init ();
