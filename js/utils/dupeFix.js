import { todoData } from "../data/data.js";
export function dupeFix(id) {
  const index = todoData.findIndex(item => item.id === id);
  if(index > -1) todoData.splice(index, 1);
}