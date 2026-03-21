import { addTask } from "./addingTaskButton.js";
import { loadTask } from "./components/loadTask.js";
const addButton = document.getElementById("addBtn");
addButton.addEventListener("click", addTask)
loadTask();
