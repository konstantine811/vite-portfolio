import "/style.scss";
import moment from "moment";

const URL_PATH = "http://localhost:3000";
const API_PATH = {
  todoList: "todo-list",
  todoDoneList: "todo-list-done",
};
const DATE_PATTERN = "DD.MM.YYYY/HH:mm";

const generateId = function () {
  return Date.now() * Math.random();
};

getTask(API_PATH.todoList).then(function (tasks) {
  tasks.forEach(function (task) {
    addTaskEl(task);
  });
});

getTask(API_PATH.todoDoneList).then(function (tasks) {
  tasks.forEach(function (task) {
    addDoneTaskEl(task);
  });
});

const modalInput = document.getElementById("modal-1");
const cardWrapToDoEl = document.getElementById("cardWrapToDo");
const cardWrapDoneEl = document.getElementById("cardWrapDone");

document.getElementById("taskForm").addEventListener("submit", function (e) {
  // DISABLE DEFAULT EVENTS LIKE ACTION TO REQUST TO BACK_END
  e.preventDefault();
  // GET VALUES FROM FROM
  const titleEl = document.getElementById("taskTitle");
  const descEl = document.getElementById("taskDescription");
  const selectEl = document.getElementById("taskPriority");
  // CREATE OBJECT DATA FOR TASK TO SAVE IN DATA_BASE
  const taskData = {
    id: generateId().toString(),
    title: titleEl.value,
    description: descEl.value,
    priority: selectEl.value,
    date: Date.now(),
  };
  // POST OUR DATA TO DATA_BASE
  addTask(taskData, API_PATH.todoList);
  // ADD TASK TO HTML VIEW
  addTaskEl(taskData);
  // RESENT VALUE
  titleEl.value = "";
  descEl.value = "";
  selectEl.value = "middle";
  // CLOSE MODAL WINDOW
  modalInput.checked = false;
});

// CREATE DOM ELEMENTS
function addTaskEl(task) {
  const taskElement = createTaskEl(task);
  cardWrapToDoEl.appendChild(taskElement);
  document.getElementById(task.id).addEventListener("input", function (e) {
    // DELETE OR REMOVE TASK ELEMENT FROM HTML
    cardWrapToDoEl.removeChild(taskElement);
    // DELETE TASK FROM DB.JSON
    deleteTask(task.id, API_PATH.todoList);
    // ADD TO DONE WRAPPER
    addDoneTaskEl(task);
    // ADD TO DONE DB.JSON
    addTask(task, API_PATH.todoDoneList);
  });
}

function addDoneTaskEl(task) {
  const deleteBtn = createDeleteBtn(task.id);
  const taskEl = createTaskEl(task, true, deleteBtn.btn);
  cardWrapDoneEl.appendChild(taskEl);
  document.getElementById(task.id).addEventListener("input", function (e) {
    // DELETE OR REMOVE TASK ELEMENT FROM HTML
    cardWrapDoneEl.removeChild(taskEl);
    // DELETE TASK FROM DB.JSON
    deleteTask(task.id, API_PATH.todoDoneList);
    // ADD TO DONE WRAPPER
    addTaskEl(task);
    // ADD TO DONE DB.JSON
    addTask(task, API_PATH.todoList);
  });

  document
    .getElementById(deleteBtn.buttonId)
    .addEventListener("click", function () {
      deleteTask(task.id, API_PATH.todoDoneList);
      cardWrapDoneEl.removeChild(taskEl);
    });
}

// CREATE DOM ELEMENTS
function createTaskEl(task, isChecked = false, deleteBtnEl = "") {
  const taskEl = document.createElement("div");
  taskEl.className = `card border ${getClassPriority(task.priority)}`;
  const taskElContent = /*HTML*/ `<div  class="card-body ${
    deleteBtnEl ? "relative" : ""
  }">
                ${deleteBtnEl}
                <div class="flex gap-3 items-center justify-between">
                  <div class="flex gap-3 items-center">
                    <label class="flex items-center cursor-pointer"
                      ><input
                        ${isChecked ? "checked" : ""}
                        type="checkbox"
                        class="checkbox"
                        id="${task.id}"
                    /></label>
                    <h2 class="card-header">${task.title}</h2>
                  </div>
                  <span class="badge badge-outline-primary badge-md"
                    >${moment(task.date).format(DATE_PATTERN)}</span
                  >
                </div>
                ${
                  task.description
                    ? /*html*/ `<p class="text-content2">
                 ${task.description}
                </p>`
                    : ""
                }
              </div>`;
  taskEl.innerHTML = taskElContent;
  return taskEl;
}

function createDeleteBtn(id) {
  const deleteButtonId = `delete-${id}`;
  const deleteButtonEl = /*html */ `<button id="${deleteButtonId}" class="absolute top-2 right-2 btn btn-circle self-end btn-solid-error">
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        d="M7.5 9h9v10h-9zM5 9h14M9.364 6h5v3h-5zm1.181 5v6m3-6v6"
      />
    </svg>
  </button>`;
  return { btn: deleteButtonEl, buttonId: deleteButtonId };
}

// switch coloring
function getClassPriority(taskPriority) {
  switch (taskPriority) {
    case "low":
      return "border-green-600";
    case "middle":
      return "border-blue-600";
    case "high":
      return "border-red-700";
    default:
      return "border-red-50";
  }
}

// API REQUESTS
function addTask(task, apiPath) {
  fetch(`${URL_PATH}/${apiPath}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).catch(function (e) {
    console.error(e);
  });
}

function getTask(apiPath) {
  return fetch(`${URL_PATH}/${apiPath}`)
    .then(function (res) {
      return res.json();
    })
    .catch(function (e) {
      console.error(e);
    });
}

function deleteTask(id, apiPath) {
  return fetch(`${URL_PATH}/${apiPath}/${id}`, { method: "DELETE" })
    .then(function (res) {
      res.json();
    })
    .catch(function (e) {
      console.error(e);
    });
}
