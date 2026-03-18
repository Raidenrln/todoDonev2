import { todoData } from "./data/data.js";
import { savingTask } from "./data/save.js";
import { editModalShow } from "./modal/editModal.js";
import { dupeFix } from "./utils/dupeFix.js";

export function addTask() {
  let todo = {};
  const taskid = Date.now();
  const container = document.getElementById("task");

  const content = document.createElement("div");
  content.className = `div class="flex items-center w-full h-12.5 taskContent bg-white rounded-lg overflow-hidden">`;
  content.setAttribute("data-task", taskid);
  content.innerHTML = `
    <div class="custom-checkbox-content px-3">
      <label class="custom-checkbox flex items-center">
        <input class="checkbox" type="checkbox" class="w-5 h-5">
        <span></span>
      </label>
    </div>
    <div class="flex-1 h-12">
      <input class="w-full h-full outline-none userInputValue" type="text" placeholder="Enter task...">
    </div>
    <div class="flex h-12.5 justify-center items-center">
      <button class="px-3 h-full save">Save</button>
    </div>
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
        about: "",
        important: false
      };
      todoData.push(todo);
      savingTask(taskid);
      targetTaskInput.disabled = true;
    } else {
      const idFromAttribute = content.getAttribute("data-task");
      editModalShow(idFromAttribute);
    }
  });
}