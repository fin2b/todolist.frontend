import http from '../../util/http';

export default {
  findAllTodo(context, payload) {
    return http.get(`/todo/${payload}`)
      .then(response => response.data)
      .then(response => {
        console.log('response', response);
        context.commit('setTodoList', response);
        return response;
      }).catch(err => console.error(err));
  },
  createTodo(context, payload) {
    return http.post('/todo', payload)
      .then(response => {
        if (response.status === 200) {
          return response.data;
        }
        if (response.status === 500) {
          throw new Error('Internal Error');
        }
      }).catch(err => console.error(err));
  },
  updateTodo(context, payload) {
    return http.put('/todo', payload)
      .then(response => response.data)
      .then(response => {
        context.commit('setCurrentTodo', response);
        return response;
      }).catch(err => console.error(err));
  },
  deleteTodo(context, payload) {
    return http.delete(`/todo`, {data: payload})
      .then(response => {
        console.log('payload', payload);
        if (response.state === 200) {
          return response;
        }
      }).catch(err => console.error(err));
  }
};
