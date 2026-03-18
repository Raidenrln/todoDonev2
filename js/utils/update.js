import { todoData } from "../data/data.js";
export function updateOneTask(id) {
  const taskData = todoData.findIndex(task => task.id == id);
  const taskId = document.querySelector(`[data-task="${id}"]`)
  console.log(taskData);
  
  const inputCheckBox = taskId.querySelector(".checkbox")
  inputCheckBox.checked = todoData[taskData].isDone ? "checked" : "";
  
  const inputUserValue = taskId.querySelector(".userInputValue");
  inputUserValue.value = todoData[taskData].text;
}