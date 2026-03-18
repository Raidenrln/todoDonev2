import { todoData } from "../data/data.js";
import { editButton } from "./edit.js";

export function loadTask() {
  const container = document.getElementById("task");

  todoData.forEach((a) => {
    let todoHTML = `
      <div data-task="${a.id}" class="flex items-center w-full h-12.5 taskContent bg-white rounded-lg overflow-hidden">
        <div class="custom-checkbox-content px-3">
          <label class="custom-checkbox flex items-center">
            <input type="checkbox" class="w-5 h-5" ${a.isDone ? "checked" : ""}>
            <span></span>
          </label>
        </div>
        <div class="flex-1 h-12">
          <input class="w-full h-full outline-none" type="text" placeholder="Enter task..." value="${a.text}">
        </div>
        <div class="flex h-12.5 justify-center items-center">
          <button class="px-3 h-full edit">Save</button>
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", todoHTML);

    // Fixed: Select the element within the container using the unique ID
    const content = container.querySelector(`[data-task="${a.id}"]`);
    const edit = content.querySelector(".edit");

    edit.addEventListener("click", () => editButton(a.id));
  });
}