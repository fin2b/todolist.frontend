import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  todos: [],
  todo: {
    id: '',
    title: '',
    description: '',
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
