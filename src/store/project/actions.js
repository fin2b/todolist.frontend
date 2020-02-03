import http from '../../util/http';

export default {
  asyncFindAllProject(context) {
    http.get('/project')
      .then(response => response.json())
      .then(response => {
        context.commit('setProjects', response);
        return response;
      }).catch(err => console.error(err));
  },
  asyncFindOneProject(context, payload) {
    http.get(`/project/${payload.id}`)
      .then(response => response.json())
      .then(response => {
        context.commit('setProject', response);
        return response;
      }).catch(err => console.error(err));
  },
  asyncSetProject(context, payload) {
    http.post('/project', payload)
      .then(response => response.json())
      .then(response => {
        context.commit('setProject', response);
        return response;
      }).catch(err => console.error(err));
  },
  asyncUpdateProject(context, payload) {
    http.put(`/project/${payload.id}`, payload)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  },
  asyncRemoveProject(context, payload) {
    http.delete(`/project/${payload.id}`)
      .then(response => console.log(response))
      .catch(err => console.error(err));
  },
};