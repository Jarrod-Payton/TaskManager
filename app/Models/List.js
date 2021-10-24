import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class List {
  constructor(data) {
    this.name = data.name
    this.color = data.color
    this.id = data.id || generateId()
  }
  get Template() {
    return `
    <div class="col-6 col-md-3">
    <div class="row card m-1 mt-2 mb-2" style="width: 300px;">
      <div class="card-text">
        <div class="col-12 text-between" style="background-color:${this.color}">
          <h4 class="p-3">${this.name}</h4>
          </div>
          <div class="container" style="height: 700px;">
          ${this.getTasks}
          </div>
          </div>
          <div class="col-12">
          <form onsubmit="app.taskController.createTask('${this.id}')">
          <input type="text" class="form-control" name="taskName" placeholder="Add Task">
          <div></div>
          <button class="btn btn-primary mt-2" type="button">Add Task</button>
          </form>
          </div>
          </div>
          <button type="button" class="btn btn-danger mt-2" onclick = "app.listController.DeleteList('${this.id}')"><b>Delete List</b></button>
          </div>
          </div>`
  }
}