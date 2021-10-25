import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"
import { loadData, saveData } from "../Utils/LocalStorage.js"

function _update() {
  let list = ProxyState.lists
  let template = ''
  list.forEach(p => template += p.Template)
  document.getElementById('app').innerHTML = template
  saveData()
  console.log(ProxyState.Tasks)
}

export class TaskController {

  createTask(ListID) {
    window.event.preventDefault()
    const form = window.event.target
    let taskinfo = {
      name: form.taskName.value,
      listID: ListID
    }
    taskService.createTask(taskinfo)
  }

  completeTask(id) {
    taskService.completeTask(id)
    _update()
  }

  deleteTask(id) {
    if (window.confirm('Are you sure you want to delete this item? You could always just complete it and then your friends will think you are proactive and not a total bum.')) {
      taskService.deleteTask(id)
    }
  }
}