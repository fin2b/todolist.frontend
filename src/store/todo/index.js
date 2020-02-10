import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  todo: [],
  currentTodo: {},
  currentType: '조회하기'
};

export default {
  state,
  actions,
  getters,
  mutations,
};
