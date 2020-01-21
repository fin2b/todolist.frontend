export default {
  setTodoList(state, payload) {
    state.todos = payload;
  },
  setTodo(state, payload) {
    state.todo = payload;
  },
  setTodoCurrentType(state, payload) {
    state.currentType = payload;
  },
  setTodoDescription(state, payload) {
    state.todo.description = payload;
  }
};
