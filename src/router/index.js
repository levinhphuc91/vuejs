import Vue from 'vue';
import Router from 'vue-router';
import { Lookout, LookoutResult, Mc } from '@Component';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mc',
      component: Mc,
    },
    {
      path: '/lookout',
      name: 'lookout',
      component: Lookout,
    },
    {
      path: '/lookout-result',
      name: 'lookout-result',
      component: LookoutResult,
    },
  ],
});
