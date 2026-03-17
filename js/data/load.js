import { todoData } from "./data.js";
export function loadData() {
  let loadDataStorage = localStorage.getItem("todo");
  let JSONdata = JSON.parse(loadDataStorage) || []
  if (JSONdata.length === 0) {
    console.log("no data existed");
    return
  } else {
    todoData.push(...JSONdata);
    console.log("data existed");
  }
};