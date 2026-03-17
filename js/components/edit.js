import { todoData } from "../data/data.js";
import { savingTask } from "../data/save.js";
export function editButton(id) {
  const taskDataTarget = todoData.findIndex(task => task.id === id);
  const targetTaskContent = document.querySelector(`[data-task="${id}"]`);
  const targetButton = targetTaskContent.querySelector(".edit");
  const targetInput = targetTaskContent.querySelector("input[type=text]");

  if(targetButton.textContent.includes("Edit")) {
    targetInput.disabled = false;
    targetInput.focus();
    targetInput.setSelectionRange(targetInput.value.length, targetInput.value.length);
    targetButton.textContent = "Save";

  } else {
    const targetValue = targetInput.value;
    todoData[taskDataTarget].text = targetValue;
    targetButton.textContent = "Edit";
    savingTask(id);
  }
};