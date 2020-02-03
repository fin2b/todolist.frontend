import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  todo: [],
  currentType: 'RETRIEVE'
};

export default {
  state,
  actions,
  getters,
  mutations,
};
