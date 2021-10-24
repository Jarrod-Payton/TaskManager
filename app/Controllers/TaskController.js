import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"


export class TaskController {

  Console() {
    window.event.preventDefault()
    console.log('submitted')
  }
  createTask(ListID) {
    window.event.preventDefault()
    const form = window.event.target
    let taskinfo = {
      name: form.taskName.value,
      listID: ListID
    }
    console.log(taskinfo)
    taskService.createTask(taskinfo)
  }
}