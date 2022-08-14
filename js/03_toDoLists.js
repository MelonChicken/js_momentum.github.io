const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();

}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    li.classList.push = "todos";
    const btn = document.createElement("button");

    btn.innerText = "✓";
    span.innerText = `${newTodoObj.content}  `;
    btn.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        id: Date.now(),
        content: newTodo
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleSubmit);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}