import http from '../../util/http';

export default {
  asyncFindAllProject(context) {
    return http.get('/project')
      .then(response => response.data)
      .then(response => {
        context.commit('setProjects', response);
        return response;
      }).catch(err => console.error(err));
  },
  asyncFindOneProject(context, payload) {
    return http.get(`/project`, { params: payload })
      .then(response => response.data)
      .then(response => {
        context.commit('setProject', response);
        return response;
      }).catch(err => console.error(err));
  },
  asyncSetProject(context, payload) {
    return http.post('/project', payload)
      .then(response => response.data)
      .then(response => {
        context.commit('setProject', response);
        return response;
      }).catch(err => console.error(err));
  },
  asyncUpdateProject(context, idx, payload) {
    return http.put(`/project`, { params: idx }, payload)
      .then(response => response.data)
      .then(response => console.log(response))
      .catch(err => console.error(err));
  },
  asyncRemoveProject(context, payload) {
    return http.delete(`/project/${payload.id}`)
      .then(response => console.log(response))
      .catch(err => console.error(err));
  },
};