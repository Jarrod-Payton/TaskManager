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
        <div class="col-12 text-center" style="background-color:${this.color}">
          <h4 class="p-3">${this.name}</h4>
          <p> ${this.TaskCounter()}<p>
          </div>
          <div class="container-fluid align-content-center" style="min-height: 500px;">
          ${this.getTasks()}
          </div>
  <div class="col-12">
    <form onsubmit="app.taskController.createTask('${this.id}')">
      <input type="text" class="form-control" name="taskName" id="taskName" placeholder="Add Task" minlength="3" maxlength="50" required>
      <button class ="btn btn-dark mt-2">Add Task</button>
    </form>
  </div>
          </div >
  <button type="button" class="btn btn-danger mt-2" onclick="app.listController.DeleteList('${this.id}')"><b>Delete List</b></button>
          </div >
          </div > `
  }

  getTasks() {
    const tasks = ProxyState.Tasks.filter(l => this.id == l.listID)
    let template = ''
    tasks.forEach(t => template += t.Template)
    return template
  }

  TaskCounter() {
    let total = 0
    let completed = 0
    for (let c = 0; c < ProxyState.Tasks.length; c++) {
      if (ProxyState.Tasks[c].listID == this.id) {
        total++
        if (ProxyState.Tasks[c].completed == true) {
          completed++
          ProxyState.Tasks[c].Template = `
          <div class="col-12 m-1 pe-5">
          <div class="bg-success text-center p-2">
          <button class="btn btn-success btn-small" disabled>Completed</button>
          <div class="card text-start ps-2" style="min-height=100px">
          <div class="card-text">
          <p>${ProxyState.Tasks[c].name}</p>
          </div>
          </div>
          <button class="btn btn-danger btn-small p-2" onclick = "app.taskController.deleteTask('${ProxyState.Tasks[c].id}')">Delete Task</button>
          </div>
          </div>`
        }
      }
    }
    return `${completed} / ${total}`
  }
}