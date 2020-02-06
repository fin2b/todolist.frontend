import Vue from 'vue';
import Router from 'vue-router';
import {Home} from './views';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/:id',
      component: Home,
      name: 'home',
      props: true,
    },
  ],
});

export default router;