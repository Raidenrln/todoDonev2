import { todoData } from "./data.js";
export function loadData() {
  let loadDataStorage = localStorage.getItem("todo");
  let JSONdata = JSON.parse(loadDataStorage) || []
  if (JSONdata.length === 0) {
    return
  } else {
    todoData.push(...JSONdata);
  }
};