var scoreInput = document.querySelector("#score");
var initalInput = document.querySelector("#text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");

var totals = [];
var score = localStorage.getItem("scoreCounter");

scoreInput.textContent = "Final Score: " + score;
//localStorage.setItem("scoreCounter", scoreCounter)
  //var storedTodos = JSON.parse(localStorage.getItem("todos"));

function storeInitialandScores() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("initialInput", initialInput);
}

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var initialandScore = initalInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (initialandScore === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    totals.push(initialandScore);
    initalInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeInitialandScores(); 
    renderTodos();
  });

//init();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  
  scoreInput.textContent = "Final Score: " + score;
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});

// When a element inside of the todoList is clicked...
//todoList.addEventListener("click", function(event) {
  //var element = event.target;

  // If that element is a button...
  //if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    //var index = element.parentElement.getAttribute("data-index");
    //todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    //storeTodos();
    //renderTodos();
  //}
//});