import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  item: {
    text: '',
    desc: '',
  },
  items: [],
};

export default {
  state,
  actions,
  getters,
  mutations,
};
