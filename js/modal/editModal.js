import { Task } from "../class/todoClass.js";
import { todoManager } from "../class/todoManager.js";
import { updateOneTask } from "../utils/update.js";
import { deleteTask } from "./delete.js";

export function editModalShow(id) {
  const container = document.querySelector(".overlayContainer");
  const targetTaskId = todoManager.tasks.find(task => task.id == id);
  const taskData = new Task(targetTaskId);
  console.log(taskData);

  const taskHTML = `
    <div class="modalContainer" data-task="${taskData.getTaskID()}">
      <div class="modalContent">
        <div class="logo">
          <img src="./assets/img/clover.png">
          <span class="closebtn">&times;</span>
        </div>

        <div class="relative taskContent flex flex-row items-center justify-center">
          <span class="markImportant">${taskData.getImportantValue() ? "!" : ""}</span>
          <div class="custom-checkbox-content">
            <label class="custom-checkbox flex items-center justify-center">
              <input class="checkbox" type="checkbox" ${taskData.getCheckboxValue() ? "checked" : ""}>
              <span></span>
            </label>
          </div>
          <input class="userInputValue" type="text" value="${taskData.getInputValue()}">
        </div>

        <div class="taskImportant">
          <h3>Mark As Important</h3>
          <label class="switch">
            <input class="importantSwitch" type="checkbox" ${taskData.getImportantValue() ? "checked" : ""}>
            <span class="slider"></span>
          </label>
        </div>

        <div class="taskDetails">
          <h3>About:</h3>
          <textarea class="textAreaValue">${taskData.getInputAboutValue()}</textarea>
        </div>

        <div class="taskDeleteSave">
          <button class="delete-btn">Delete</button>
          <button class="save-btn">Save</button>
        </div>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", taskHTML);
  container.style.display = "flex";

  const modal = container.querySelector(".modalContainer");
  const checkboxBtn = modal.querySelector(".checkbox");
  const inputValue = modal.querySelector(".userInputValue");
  const ImportantBtn = modal.querySelector(".importantSwitch");
  const textArea = modal.querySelector(".textAreaValue");
  const deleteBtn = modal.querySelector(".delete-btn");
  const saveBtn = modal.querySelector(".save-btn");
  const closeButton = modal.querySelector(".closebtn");
  const taskContent = modal.querySelector(".taskContent");
  const currentTaskId = modal.dataset.task;

  inputValue.style.textDecoration = checkboxBtn.checked ? "line-through" : "none";

  checkboxBtn.addEventListener("change", () => {
    inputValue.style.textDecoration = checkboxBtn.checked ? "line-through" : "none";
  });

  ImportantBtn.addEventListener("change", () => {
    const mark = taskContent.querySelector(".markImportant");
    if (mark) {
      mark.textContent = ImportantBtn.checked ? "!" : "";
      todoManager.updateTask(currentTaskId, {
        important: ImportantBtn.checked
      });
      console.log(todoManager.tasks);
      updateOneTask(currentTaskId);
    }
  });

  saveBtn.addEventListener("click", () => {
    todoManager.updateTask(currentTaskId, {
    text: inputValue.value,
    about: textArea.value,
    isDone: checkboxBtn.checked,
    important: ImportantBtn.checked
    })
    console.log(todoManager.tasks);
    todoManager.saveToStorage();
    updateOneTask(currentTaskId);

    container.style.display = "none";
    container.innerHTML = "";
  });

  deleteBtn.addEventListener("click", () => deleteTask(currentTaskId));

  closeButton.addEventListener("click", () => {
    container.style.display = "none";
    container.innerHTML = "";
  });
}