import { ListController } from "./Controllers/ListController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  listController = new ListController()
}

window["app"] = new App();