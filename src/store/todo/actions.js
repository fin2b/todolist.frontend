import http from '../../util/http';

export default {
  asyncFindAllTodo(context) {
    http.get('/todo')
      .then(response => response.json())
      .then(response => {
        context.commit('setTodos', response);
        return response;
      }).catch(err => console.error(err));
  },
  asyncFindOneTodo(context, payload) {
    http.get(`/todo/${payload.id}`)
      .then(response => response.json())
      .then(response => {
        context.commit('')
      })
  },
  asyncSetTodo(context, payload) {
    http.post('/todo', payload).then(response => {
      console.log(response);
      return response;
    }).catch(err => console.error(err));
  }
};
