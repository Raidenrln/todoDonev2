import { todoData } from "../data/data.js";
import { savingTask } from "../data/save.js";
import { updateOneTask } from "../utils/update.js";
import { deleteTask } from "./delete.js";
export function editModalShow(id) {
  const container = document.querySelector(".overlayContainer");
  const targetTaskId = todoData.findIndex(task => task.id == id);
  
  let taskHTML = `
      <div class="modalContainer" data-task="${todoData[targetTaskId].id}">
        <div class="modalContent">
          <div class="logo">
            <img src="./assets/img/clover.png">
            <span class="closebtn">&times;</span>
          </div>

          <div class="relative taskContent flex flex-row items-center justify-center">
            <span class="markImportant r-0">!</span>
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
              <input class="importantSwitch"type="checkbox" ${todoData[targetTaskId].important ? "checked" : ""}>
              <span class="slider"></span>
            </label>
          </div>

          <div class="taskDetails">
            <h3>About:</h3>
            <textarea></textarea>
          </div>

          <div class="taskDeleteSave">
            <button class="delete-btn">Delete</button>
            <button class="save-btn">Save</button>
          </div>
        </div>
      </div>
  `
  container.insertAdjacentHTML("beforeend", taskHTML);
  container.style.display = "flex";

  const modal = container.querySelector(".modalContainer");
  
  const currentTaskId = modal.dataset.task; 

  const deleteBtn = modal.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => deleteTask(currentTaskId));
  const closeButton = document.querySelector(".closebtn");

  const saveBtn = modal.querySelector(".save-btn");
  saveBtn.addEventListener("click", () => {
    savingTask(currentTaskId)
    const container = document.querySelector(".overlayContainer");

    const ImportantBtn = modal.querySelector(".importantSwitch")
    const checkboxBtn = modal.querySelector(".checkbox");
    const inputValue = modal.querySelector(".userInputValue")
    
    const ImportantValue = ImportantBtn.checked;
    const isChecked = checkboxBtn.checked;
    const textValue = inputValue.value;
    
    todoData[targetTaskId].important = ImportantValue
    todoData[targetTaskId].isDone = isChecked
    todoData[targetTaskId].text = textValue

    console.log(isChecked);
    console.log(textValue);
    updateOneTask(currentTaskId);
    
    

    if (container) {
      container.style.display = "none";
      container.innerHTML = "";
      savingTask(id);
      console.log(todoData);
    }
  });

  closeButton.addEventListener("click", () => {
    container.style.display = "none"
    container.innerHTML = "";
  });  
}