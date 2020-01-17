import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  todos: [],
  todo: {
    title: '',
    desc: '',
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
