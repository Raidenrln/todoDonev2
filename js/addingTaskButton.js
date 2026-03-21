import { editModalShow } from "./modal/editModal.js";
import { todoManager } from "./class/todoManager.js";

export function addTask() {
  const container = document.getElementById("task");
  if (!container) return;

  const content = document.createElement("div");
  content.className = "flex items-center w-full h-12.5 taskContent bg-white rounded-lg overflow-hidden";
  
  content.innerHTML = `
    <div class="custom-checkbox-content px-3">
      <label class="custom-checkbox flex items-center">
        <input type="checkbox" class="checkbox w-5 h-5" disabled>
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

  const targetTaskInput = content.querySelector(".userInputValue");
  const targetTaskSave = content.querySelector(".save");
  const targetCheckBox = content.querySelector(".checkbox");

  // Listener for Checkbox
  targetCheckBox.addEventListener("change", () => {
    const currentId = content.getAttribute("data-task");
    if (currentId) {
      todoManager.updateTask(currentId, { isDone: targetCheckBox.checked });
    }
  });

  // Listener for Save/Edit Button
  targetTaskSave.addEventListener("click", () => {
    const isSaving = targetTaskSave.textContent.trim() === "Save";

    if (isSaving) {
      const newTask = todoManager.addNewTask(targetTaskInput.value, "");
      content.setAttribute("data-task", newTask.id);
      targetTaskSave.textContent = "Edit";
      targetCheckBox.disabled = false;
      targetTaskInput.disabled = true;
      console.log(todoManager);
      
    } else {
      const idFromAttribute = content.getAttribute("data-task");
      editModalShow(idFromAttribute);
    }
  });
}