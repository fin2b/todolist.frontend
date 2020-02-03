export default {
  getProjects: state => state.project,
  getProject: (state) => (idx) => state.project[idx],
  getProjectTitle: (state) => (idx) => state.project[idx].title,
  getProjectCurrentType: state => state.currentType,
};