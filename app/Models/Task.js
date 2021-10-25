import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor(data) {
    this.name = data.name
    this.listID = data.listID
    this.id = generateId()
    this.Template = `${this.Template()}`
    this.completed = data.completed || false
  }
  Template() {
    return `
    <div class="col-12 m-4 pe-5">
    <div class="bg-light text-center p-2">
    <button class="btn btn-success btn-small" onclick = "app.taskController.completeTask('${this.id}')">Complete</button>
    <div class="card text-start ps-2" style="min-height=100px">
    <div class="card-text">
    <p>${this.name}</p>
    </div>
    </div>
    <button class="btn btn-danger btn-small p-2" onclick = "app.taskController.deleteTask('${this.id}')">Delete Task</button>
    </div>
    </div>
    `
  }
}