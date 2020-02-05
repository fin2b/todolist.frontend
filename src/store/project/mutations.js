export default {
  setProjects(state, payload) {
    return state.project = payload;
  },
  setProject(state, idx, payload) {
    return state.project[idx] = payload;
  },
  setCurrentProject(state, payload) {
    return state.currentProject = payload;
  },
  setProjectCurrentType(state, payload) {
    return state.currentType = payload;
  }
}
