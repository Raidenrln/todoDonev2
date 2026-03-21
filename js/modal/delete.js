import { Task } from "../class/todoClass.js";
import { todoManager } from "../class/todoManager.js";

export function deleteTask(id) {
  const taskId = todoManager.tasks.find(task => task.id == id);
  const task = new Task(taskId)
  if (taskId !== -1) {
    const taskElement = document.querySelector(`[data-task="${task.id}"]`);
    if (taskElement) {
      todoManager.deleteTask(task.id)
      taskElement.remove();
    }
    const container = document.querySelector(".overlayContainer");
    if (container) {
      container.style.display = "none";
      container.innerHTML = "";
    }
  } else {
    console.error("Task not found with ID:", id);
  }
}