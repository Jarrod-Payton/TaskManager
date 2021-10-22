import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListService {
  constructor() {
    console.log('service added')
  }
  CreateList(listdata) {
    const list = new List(listdata)
    ProxyState.lists = [list, ...ProxyState.lists]
  }

  DeleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
  }
}

export const listService = new ListService()