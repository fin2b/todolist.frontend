import Vue from 'vue';
import Vuex from 'vuex';

import toDoItem from './todo';
import project from './project';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    toDoItem,
    project,
  },
});
