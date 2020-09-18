var scoreOutput = document.querySelector("#score");
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var clearButton = document.querySelector(".btn");
var restartButton = document.querySelector("#restart");

var todos = [];
var score = localStorage.getItem("scoreCounter");
scoreOutput.textContent = "Final Score: " + score;

init();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";


  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i] + ' ' + score;

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    todoList.appendChild(li);
  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
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

clearButton.addEventListener("click", function(){
  todos = [];
  renderTodos();
})

restartButton.addEventListener("click", function(){
  window.open("index.html", "_self");
})