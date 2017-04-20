import Vue from 'vue';
import Router from 'vue-router';
import { Home, Lookout } from '@Component';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/lookout',
      name: 'lookout',
      component: Lookout,
    },
  ],
});
