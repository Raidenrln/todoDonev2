export class Task {
  constructor(data) {
    this.id = data.id
    this.important = data.important
    this.isDone = data.isDone
    this.text = data.text
    this.about = data.about
  }
  getTaskID() {
    return this.id
  }
  getImportantValue() {
    return this.important;
  }
  getCheckboxValue() {
    return this.isDone;
  }
  getInputValue() {
    return this.text;
  }
  getInputAboutValue() {
    return this.about;
  }
}