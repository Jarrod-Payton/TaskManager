import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js";

export function saveData() {
  localStorage.setItem('ListApp', JSON.stringify({
    lists: ProxyState.lists,
    Tasks: ProxyState.Tasks
  }))
}

export function loadData() {
  let data = JSON.parse(localStorage.getItem('ListApp'))
  if (data != null) {
    ProxyState.lists = data.lists.map(l => new List(l))
    ProxyState.Tasks = data.Tasks.map(t => new Task(t))
  }
}