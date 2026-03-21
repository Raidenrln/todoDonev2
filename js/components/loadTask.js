import { editModalShow } from "../modal/editModal.js";
import { todoManager } from "../class/todoManager.js";
import { Task } from "../class/todoClass.js";
export function loadTask() {
  const container = document.getElementById("task");

  container.innerHTML = "";

  todoManager.tasks.forEach((a) => {
    const todoHTML = `
      <div data-task="${a.id}" class="relative flex items-center w-full h-12.5 taskContent bg-white rounded-lg overflow-hidden">
        <span class="markImportantTask">${a.important ? "!" : ""}</span>
        <div class="custom-checkbox-content px-3">
          <label class="custom-checkbox flex items-center">
            <input class="checkbox" type="checkbox" class="w-5 h-5" ${a.isDone ? "checked" : ""}>
            <span></span>
          </label>
        </div>
        <div class="flex-1 h-12">
          <input class="w-full h-full outline-none userInputValue" type="text" placeholder="Enter task..." value="${a.text}" disabled>
        </div>
        <div class="flex h-12.5 justify-center items-center">
          <button class="px-3 h-full edit">Edit</button>
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", todoHTML);    

    const content = container.querySelector(`[data-task="${a.id}"]`);
    const edit = content.querySelector(".edit");
    const checkbox = content.querySelector(".checkbox");
    const inputValue = content.querySelector(".userInputValue");
    const taskId = todoManager.tasks.find(task => task.id == a.id);
    const task = new Task(taskId)

    inputValue.style.textDecoration = checkbox.checked ? "line-through" : "none";

    checkbox.addEventListener("change", () => {
      inputValue.style.textDecoration = checkbox.checked ? "line-through" : "none";
      task.isDone = checkbox.checked;
      todoManager.updateTask(task.id, {
        isDone: checkbox.checked
      });
      
    });

    edit.addEventListener("click", () => {
      editModalShow(task.id);
    });
  });
}