import "/style.scss";

const URL_PATH = "http://localhost:3000/";

document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const titleEl = document.getElementById("taskTitle");
  const descEl = document.getElementById("taskDescription");
  const selectEl = document.getElementById("taskPriority");
  console.log(`${titleEl.value} ____ ${descEl.value} ____ ${selectEl.value}`);
  addTask({
    title: titleEl.value,
    description: descEl.value,
    priority: selectEl.value,
  });
});

function addTask(task) {
  fetch("http://localhost:3000/todo-list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
}
