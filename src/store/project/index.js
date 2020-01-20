import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  projects: [],
  project: {
    title: '',
    todos: [
      {
        title: '',
        text: '',
      },
      {
        title: '',
        text: '',
      },
      {
        title: '',
        text: '',
      },
    ]
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
