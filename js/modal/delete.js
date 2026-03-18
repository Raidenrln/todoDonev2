import { todoData } from "../data/data.js";
import { savingTask } from "../data/save.js";

export function deleteTask(id) {
  const taskIndex = todoData.findIndex(task => task.id == id);

  if (taskIndex !== -1) {
    
    todoData.splice(taskIndex, 1);
    localStorage.removeItem(`task-${id}`);
    const taskElement = document.querySelector(`[data-task="${id}"]`);
    if (taskElement) {
      taskElement.remove();
    }
    const container = document.querySelector(".overlayContainer");
    if (container) {
      container.style.display = "none";
      container.innerHTML = "";
      savingTask(id);
    }
  } else {
    console.error("Task not found with ID:", id);
  }
}