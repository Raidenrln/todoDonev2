import { todoData } from "./data.js";
export function savingTask(uuid) {
  if (uuid) {
     localStorage.setItem("todo", JSON.stringify(todoData))
    console.log(uuid);
    console.log(todoData);
  }
}