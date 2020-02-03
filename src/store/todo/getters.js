export default {
  getTodos: state => state.todo,
  getTodosTitle: state => state.todo.map(todo => todo.title),
  getTodo: (state, idx) => state.todo[idx],
  getTodoTitle: (state, idx) => state.todo[idx].title,
  getTodoCurrentType: state => state.currentType,
};
