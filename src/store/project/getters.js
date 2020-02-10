export default {
  getProjects: state => state.project,
  getProjectsTitle: state => state.project.map(p => p.title),
  getSelectedProject: state => state.selectedProject,
  getCurrentProject: (state) => state.currentProject,
  getCurrentProjectTitle: (state) => state.currentProject.title,
  getProjectCurrentType: state => state.currentType,
};