import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import type from '../../util/pageType';

const state = {
  projects: [],
  project: {},
  currentType: type.RETRIEVE,
};

export default {
  state,
  actions,
  getters,
  mutations,
};
