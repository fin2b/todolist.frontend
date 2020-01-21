export default {
  getTodoList: state => state.todos,
  getTodoTitleList: state => state.todos.map(todo => todo.title),
  getTodo: state => state.todo,
  getTodoCurrentType: state => state.currentType,
};
