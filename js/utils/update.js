import { Task } from "../class/todoClass.js";
import { todoManager } from "../class/todoManager.js";
export function updateOneTask(id) {
  const taskData = todoManager.tasks.find(task => task.id == id);
  const task = new Task(taskData)
  const taskId = document.querySelector(`[data-task="${task.getTaskID()}"]`);
  
  const inputCheckBox = taskId.querySelector(".checkbox");
  const inputValue = taskId.querySelector(".userInputValue");
  inputCheckBox.checked = task.getCheckboxValue();
  inputValue.style.textDecoration = task.getCheckboxValue() ? "line-through" : "none";
  
  const inputImportantValue = taskId.querySelector(".markImportantTask");
  if (inputImportantValue) {
    inputImportantValue.textContent = task.getImportantValue() ? "!" : "";
  }
  const inputUserValue = taskId.querySelector(".userInputValue");
  inputUserValue.value = task.getInputValue();
};