import { List } from "./Models/List.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

const TestList = new List({
  name: "TestList"
})
const TestList2 = new List({
  name: "TestList"
})
const TestList3 = new List({
  name: "TestList"
})



class AppState extends EventEmitter {
  lists = [TestList, TestList2, TestList3]

  Console(Howdy) {
    console.log(Howdy)
  }
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
