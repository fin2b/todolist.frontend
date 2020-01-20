import todoData from './projects';

export default class Todo {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  static findAllByProjectId(projectId) {
    return todoData.projects[projectId].todo;
  }

  static findById(projectId, id) {
    return todoData.projects[projectId].todo[id];
  }
}
