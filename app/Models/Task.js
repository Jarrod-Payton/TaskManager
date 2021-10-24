import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor(data) {
    this.name = data.name.value
    this.id = data.id || generateId()
  }
  get Template() {
    return `
    <div class="col-12">
    <h3>${this.name}</h3>
    </div>
    `
  }
}