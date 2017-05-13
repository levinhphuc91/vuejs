import Vue from 'vue';
import Router from 'vue-router';
import { Lookout, LookoutResult, Mc, Intel, Term, HireUs, IntelReport, ContactUs } from '@Component';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'mc',
      component: Mc,
    },
    {
      path: '/intel',
      name: 'intel',
      component: Intel,
    },
    {
      path: '/term',
      name: 'term',
      component: Term,
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
    {
      path: '/hire-us',
      name: 'hire-us',
      component: HireUs,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs,
    },
    {
      path: '/intel-report',
      name: 'intel-report',
      component: IntelReport,
    },
  ],
});
