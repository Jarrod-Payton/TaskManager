import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js"
import { loadData, saveData } from "../Utils/LocalStorage.js"

function _update() {
  let list = ProxyState.lists
  let template = ''
  list.forEach(p => template += p.Template)
  document.getElementById('app').innerHTML = template
  saveData()
}

export class ListController {
  constructor() {
    ProxyState.on('lists', _update)
    ProxyState.on('lists', saveData)
    ProxyState.on('Tasks', _update)
    ProxyState.on('Tasks', saveData)
    loadData()
    _update()
  }

  CreateList() {
    window.event.preventDefault()
    const form = window.event.target
    const newList = {
      name: form.name.value,
      color: form.listColor.value,
    }
    listService.CreateList(newList)
    form.reset()
  }

  DeleteList(id) {
    if (window.confirm('are you sure you would like to delete this poor poor list, they have a family you know')) {
      listService.DeleteList(id)
    }
  }
}