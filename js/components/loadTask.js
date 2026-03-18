import { todoData } from "../data/data.js";
import { savingTask } from "../data/save.js";
import { editModalShow } from "../modal/editModal.js";
// import { editButton } from "./edit.js";

export function loadTask() {
  const container = document.getElementById("task");
  container.innerHTML = "";
  todoData.forEach((a) => {
    let todoHTML = `
      <div data-task="${a.id}" class="flex items-center w-full h-12.5 taskContent bg-white rounded-lg overflow-hidden">
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

    checkbox.addEventListener("change", () => {
      const taskIndex = todoData.findIndex(task => task.id == a.id)
      todoData[taskIndex].isDone = checkbox.checked;
      console.log(todoData[taskIndex].isDone);
      savingTask(a.id)
    });

    edit.addEventListener("click", () => {
      // editButton(a.id)
      editModalShow(a.id);
  });
  });
}