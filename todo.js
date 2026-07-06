// ==========================================
// PROFESSIONAL TODO APP
// ==========================================

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load Tasks
window.onload = function () {
    loadTasks();
};

// Add Task
function addTask() {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    createTask(task);

    saveTasks();

    taskInput.value = "";

}

// Create Task
function createTask(text) {

    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = text;

    span.onclick = function () {
        span.classList.toggle("completed");
        saveTasks();
    };

    const delBtn = document.createElement("button");

    delBtn.textContent = "Delete";

    delBtn.onclick = function () {
        li.remove();
        saveTasks();
    };

    li.appendChild(span);

    li.appendChild(delBtn);

    taskList.appendChild(li);

}

// Save Tasks
function saveTasks() {

    localStorage.setItem("tasks", taskList.innerHTML);

}

// Load Tasks
function loadTasks() {

    const data = localStorage.getItem("tasks");

    if (data) {

        taskList.innerHTML = data;

        restoreEvents();

    }

}

// Restore Events
function restoreEvents() {

    document.querySelectorAll("#taskList li span").forEach(span => {

        span.onclick = function () {

            span.classList.toggle("completed");

            saveTasks();

        };

    });

    document.querySelectorAll("#taskList li button").forEach(btn => {

        btn.onclick = function () {

            btn.parentElement.remove();

            saveTasks();

        };

    });

}

// Enter Key Support
taskInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        addTask();

    }

});