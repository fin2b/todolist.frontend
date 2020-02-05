export default {
  getProjects: state => state.project,
  getProjectsTitle: state => state.project.map(p => p.title),
  getCurrentProject: (state) => state.currentProject,
  getCurrentProjectTitle: (state) => state.currentProject.title,
  getProjectCurrentType: state => state.currentType,
};