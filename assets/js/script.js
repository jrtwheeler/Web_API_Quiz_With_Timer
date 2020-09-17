//Object of questions, answers, correct answer
var myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
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
  startScreen (myIntro);
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
  var myList = document.createElement("OL");
  questionParagraphSelector.appendChild(myList);

  var listItemOne = document.createElement("LI");
  myList.appendChild(listItemOne);
  var buttonOne = document.createElement("BUTTON");
  listItemOne.appendChild(buttonOne);
  buttonOne.textContent = q.answers.a;
  console.log(q.correctAnswer)
  buttonOne.addEventListener("click", function(){
    if(q.answers.a === q.correctAnswer){
      console.log(q.correctAnswer);
      console.log(q.answers.a);
      scoreCounter ++;
      questionCounter ++;
      setContent();
      //clear content
    } else {
      console.log(q.answers.a)
      timeLeft = timeLeft - 10;
      setContent();
      questionCounter ++;
      //clear content
    }
     
  })

  var listItemOne = document.createElement("LI");
  myList.appendChild(listItemOne);
  listItemOne.textContent = q.answers.b;

  var listItemOne = document.createElement("LI");
  myList.appendChild(listItemOne);
  listItemOne.textContent = q.answers.c;

  } 
  
  else if (questionCounter > quizLength){
    window.open("high_score.html", "_self");
    //Return high score
  }

  submitButton.addEventListener("click", function(){
    questionCounter ++;
  })

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
  var MyOtherQuestions = [
  
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
  },]
}

init ();
