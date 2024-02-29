import "/style.scss";
import moment from "moment";

const URL_PATH = "http://localhost:3000/";
const DATE_PATTERN = "DD.MM.YYYY/HH:mm";

const generateId = function () {
  return Date.now() * Math.random();
};

getTask().then(function (tasks) {
  tasks.forEach(function (task) {
    createTaskEl(task);
  });
});

const modalInput = document.getElementById("modal-1");
const cardWrapToDoEl = document.getElementById("cardWrapToDo");

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
  addTask(taskData);
  // ADD TASK TO HTML VIEW
  createTaskEl(taskData);
  // RESENT VALUE
  titleEl.value = "";
  descEl.value = "";
  selectEl.value = "middle";
  // CLOSE MODAL WINDOW
  modalInput.checked = false;
});

// CREATE DOM ELEMENTS
function createTaskEl(task) {
  const taskEl = document.createElement("div");
  taskEl.className = "card border border-red-700";
  const taskElContent = /*HTML*/ `<div  class="card-body">
                <div class="flex gap-3 items-center justify-between">
                  <div class="flex gap-3 items-center">
                    <label class="flex items-center cursor-pointer"
                      ><input
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
  cardWrapToDoEl.appendChild(taskEl);
  document.getElementById(task.id).addEventListener("input", function (e) {
    console.log(task);
  });
}

// API REQUESTS
function addTask(task) {
  fetch("http://localhost:3000/todo-list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).catch(function (e) {
    console.error(e);
  });
}

function getTask() {
  return fetch(`http://localhost:3000/todo-list`)
    .then(function (res) {
      return res.json();
    })
    .catch(function (e) {
      console.error(e);
    });
}
