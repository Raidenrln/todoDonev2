import { addTask } from "./addingTaskButton.js";
import { loadData } from "./data/load.js";
import { todoData } from "./data/data.js";
import { loadTask } from "./components/loadTask.js";
const addButton = document.getElementById("addBtn");
addButton.addEventListener("click", addTask)
loadData();
loadTask();