class TodoManager {
  constructor() {
    const savedData = localStorage.getItem("todo");
    this.tasks = savedData ? JSON.parse(savedData) : [];
  }

  addNewTask(text, about = "") {
    const newTodo = {
      id: Date.now(),
      text: text,
      about: about,
      isDone: false,
      important: false
    };
    
    this.tasks.push(newTodo);
    this.saveToStorage();
    return newTodo;
  }
  deleteTask(id) {
    const index = this.tasks.findIndex(task => task.id == id);

    if (index !== -1) {
      this.tasks = this.tasks.filter(task => task.id != id);
      this.saveToStorage();
    }
  }
  updateTask(id, updatedData) {
    const index = this.tasks.findIndex(task => task.id == id);
  
    if (index !== -1) {
      this.tasks[index] = { ...this.tasks[index], ...updatedData };
      this.saveToStorage();
    }
  }
  saveToStorage() {
    localStorage.setItem("todo", JSON.stringify(this.tasks));
  }
}

export const todoManager = new TodoManager();