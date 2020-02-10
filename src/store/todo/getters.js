export default {
  getTodoList: state => state.todo,
  getTodosTitle: state => state.todo.map(todo => todo.title),
  getCurrentTodo: state => state.currentTodo,
  getTodoTitle: (state) => (idx) => state.todo[idx].title,
  getTodoCurrentType: state => state.currentType,
};
