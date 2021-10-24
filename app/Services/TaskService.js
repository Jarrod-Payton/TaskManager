import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TaskService {
  createTask(info) {
    const newTask = new Task(info)
    ProxyState.Tasks = [newTask, ...ProxyState.Tasks]
    console.log(ProxyState.Tasks)
  }
}


export const taskService = new TaskService()