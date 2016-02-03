import keyMirror from "keymirror";

export default const TodoConstants = keyMirrow({
  create: null,
  updateText: null,

  complete: null,
  undoComplete: null,
  toggleCompleteAll: null,
  destroyCompleted: null
})
