export default {
  setProjects(state, payload) {
    return state.project = payload;
  },
  setProject(state, idx, payload) {
    return state.project[idx] = payload;
  },
  setProjectCurrentType(state, payload) {
    return state.currentType = payload;
  }
}
