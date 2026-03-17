import { todoData } from "../data/data.js";
import { editButton } from "./edit.js";

export function loadTask() {
  const container = document.getElementById("task");
  todoData.forEach((a) => {
  let todoHTML = `
    <div data-task="${a.id}" class="w-full h-12.5 flex flex-row items-center bg-amber-200 rounded-2xl p-2">
    <input class="w-6.25 h-6.25" type="checkbox" ${a.isDone ? "checked" : ""}></input>
    <input class="flex-1" id="input-${a.id}" type="text" value="${a.text}" disabled>
    <button class="save edit">Edit</button>
    </div>
    `;
  container.insertAdjacentHTML("beforeend", todoHTML);
    
  const content = document.querySelector(`[data-task="${a.id}"]`)
  const edit = content.querySelector(".edit");

  edit.addEventListener("click", () => editButton(a.id));
});
}

