import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js"

function _update() {
  let list = ProxyState.lists
  let template = ''
  list.forEach(p => template += p.Template)
  document.getElementById('app').innerHTML = template
}

export class ListController {
  constructor() {
    ProxyState.on('lists', _update)
    ProxyState.on('Tasks', _update)
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
    listService.DeleteList(id)
  }
}