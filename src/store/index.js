import Vue from 'vue';
import Vuex from 'vuex';

import toDoItem from './toDoItem';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    toDoItem,
  },
});
