export default {
  setTodoList(state, payload) {
    state.todo = payload;
  },
  setCurrentTodo(state, payload) {
    state.currentTodo = payload;
  },
  setTodoCurrentType(state, payload) {
    state.currentType = payload;
  },
};
