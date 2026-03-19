import { todoData } from "../data/data.js";
export function updateOneTask(id) {
  const taskData = todoData.findIndex(task => task.id == id);
  const taskId = document.querySelector(`[data-task="${id}"]`)
  
  const inputCheckBox = taskId.querySelector(".checkbox");
  const inputValue = taskId.querySelector(".userInputValue");
  inputCheckBox.checked = todoData[taskData].isDone;
  inputValue.style.textDecoration = inputCheckBox.checked ? "line-through" : "none";
  console.log(todoData[taskData]);
  
  const inputImportantValue = taskId.querySelector(".markImportantTask");
  if (inputImportantValue) {
    inputImportantValue.textContent = todoData[taskData].important ? "!" : "";
  }
  const inputUserValue = taskId.querySelector(".userInputValue");
  inputUserValue.value = todoData[taskData].text;
};