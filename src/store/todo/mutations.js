export default {
  setTodoList(state, payload) {
    state.todo = payload;
  },
  setCurrentTodo(state, idx, payload) {
    state.todo[idx] = payload;
  },
  setTodoCurrentType(state, payload) {
    state.currentType = payload;
  },
  setTodoTitle(state, idx, payload) {
    state.todo[idx].title = payload;
  },
  setTodoDescription(state, idx, payload) {
    state.todo[idx].description = payload;
  }
};
