import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  project: [],
  selectedProject: {},
  currentProject: {},
  currentType: '조회하기',
};

export default {
  state,
  actions,
  getters,
  mutations,
};
