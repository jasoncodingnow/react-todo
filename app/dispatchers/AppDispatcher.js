import {Dispatcher} from "flux";

export default class AppDispatcher extends Dispatcher {
  dispatchAndLog(action) {
    this.dispatch(action);
    console.log(action);
  }
}
