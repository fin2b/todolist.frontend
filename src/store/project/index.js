import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  projects: [
    {
      title: '',
      todo: [
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
    {
      title: '',
      todo: [
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
    {
      title: '',
      todo: [
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
  ],
  project: {
    title: '',
    todo: [
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
