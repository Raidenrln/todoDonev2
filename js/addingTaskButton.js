import { todoData } from "./data/data.js";
import { savingTask } from "./data/save.js";
import { dupeFix } from "./utils/dupeFix.js";
export function addTask() {
  let todo = {};
  const taskid = Date.now();
  const container = document.getElementById("task");

  const content = document.createElement("div");
  content.className = `w-full h-12.5 flex flex-row items-center bg-amber-200 rounded-2xl p-2`;
  content.setAttribute("data-task", taskid);
  content.innerHTML = `
    <input class="w-6.25 h-6.25" type="checkbox" disabled></input>
    <input class="flex-1" type="text" type="text" value="">
    <button class="edit save">Save</button>
  `;
  container.appendChild(content);
  const targetTaskInput = content.querySelector("input[type='text']");
  const TargetTaskSave = content.querySelector(".save");

  TargetTaskSave.addEventListener("click", () => {
    const targetTaskValue = targetTaskInput.value;

    if (TargetTaskSave.textContent.includes("Save")) {
      TargetTaskSave.textContent = "Edit";
      todo = {
        id: taskid,
        text: targetTaskValue,
        isDone: false,
      };
      todoData.push(todo);
      savingTask(taskid);
      targetTaskInput.disabled = true;
    } else {
      TargetTaskSave.textContent = "Save";
      targetTaskInput.disabled = false
      dupeFix(taskid);
    }
  });
}
