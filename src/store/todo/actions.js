import http from '../../util/http';

export default {
  asyncFindAllTodo(context) {
    http.get('/todo')
      .then(response => response.data)
      .then(response => {
        context.commit('setTodos', response);
        return response;
      }).catch(err => console.error(err));
  },
  asyncFindOneTodo(context, payload) {
    http.get(`/todo`, { params: payload })
      .then(response => response.data)
      .then(response => {
        context.commit('setTodo', response);
        return response;
      }).catch(err => console.error(err));
  },
  asyncSetTodo(context, payload) {
    http.post('/todo', payload)
      .then(response => {
      return response;
    }).catch(err => console.error(err));
  }
};
