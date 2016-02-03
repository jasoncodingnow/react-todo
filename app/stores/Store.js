import EventEmitter from "events";

const CHANGE = "change";

export default class Store extends EventEmitter {
  constructor() {
    super();
  }

  emitChange() {
    this.emit(CHANGE);
  }

  addChangeListener(callback) {
    this.on(CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE, callback);
  }
}
