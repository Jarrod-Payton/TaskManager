import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TaskService {
  createTask(info) {
    const newTask = new Task(info)
    ProxyState.Tasks = [...ProxyState.Tasks, newTask]
  }

  completeTask(id) {
    for (let c = 0; c < ProxyState.Tasks.length; c++) {
      if (ProxyState.Tasks[c].id == id) {
        ProxyState.Tasks[c].completed = true
      }
    }
  }
  deleteTask(id) {
    ProxyState.Tasks = ProxyState.Tasks.filter(t => t.id != id)
  }
}


export const taskService = new TaskService()