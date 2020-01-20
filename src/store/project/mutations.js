export default {
  setProjects(state, payload) {
    return state.projects = payload;
  },
  setProject(state, payload) {
    return state.project = payload;
  }
}