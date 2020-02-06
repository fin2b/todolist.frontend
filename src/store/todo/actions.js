import http from '../../util/http';

export default {
  asyncFindAllTodo(context, payload) {
    http.get(`/todo/${payload.projectId}`)
      .then(response => response.data)
      .then(response => {
        context.commit('setTodos', response);
        return response;
      }).catch(err => console.error(err));
  },
  asyncSetTodo(context, payload) {
    http.post('/todo', payload)
      .then(response => {
        if (response.status === 200) {
          return response.data;
        }
        if (response.status === 500) {
          throw new Error('Internal Error');
        }
      }).catch(err => console.error(err));
  }
};
