import projectData from './projects';

export default class Project {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }

  static findAll() {
    return projectData.projects;
  }

  static findById(id) {
    return projectData.projects[id];
  }
}