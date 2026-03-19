import { todoData } from "../data/data.js";
import { savingTask } from "../data/save.js";
import { updateOneTask } from "../utils/update.js";
import { deleteTask } from "./delete.js";

export function editModalShow(id) {
  const container = document.querySelector(".overlayContainer");
  const targetTaskId = todoData.findIndex(task => task.id == id);

  const taskHTML = `
    <div class="modalContainer" data-task="${todoData[targetTaskId].id}">
      <div class="modalContent">
        <div class="logo">
          <img src="./assets/img/clover.png">
          <span class="closebtn">&times;</span>
        </div>

        <div class="relative taskContent flex flex-row items-center justify-center">
          <span class="markImportant">${todoData[targetTaskId].important ? "!" : ""}</span>
          <div class="custom-checkbox-content">
            <label class="custom-checkbox flex items-center justify-center">
              <input class="checkbox" type="checkbox" ${todoData[targetTaskId].isDone ? "checked" : ""}>
              <span></span>
            </label>
          </div>
          <input class="userInputValue" type="text" value="${todoData[targetTaskId].text}">
        </div>

        <div class="taskImportant">
          <h3>Mark As Important</h3>
          <label class="switch">
            <input class="importantSwitch" type="checkbox" ${todoData[targetTaskId].important ? "checked" : ""}>
            <span class="slider"></span>
          </label>
        </div>

        <div class="taskDetails">
          <h3>About:</h3>
          <textarea class="textAreaValue">${todoData[targetTaskId].about}</textarea>
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
      todoData[targetTaskId].important = ImportantBtn.checked;
      updateOneTask(currentTaskId);
    }
  });

  saveBtn.addEventListener("click", () => {
    todoData[targetTaskId].text = inputValue.value;
    todoData[targetTaskId].about = textArea.value;
    todoData[targetTaskId].isDone = checkboxBtn.checked;
    todoData[targetTaskId].important = ImportantBtn.checked;

    savingTask(currentTaskId);
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