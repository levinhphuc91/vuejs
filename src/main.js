// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Tether from 'tether';
import jQuery from 'jquery';
import Vue from 'vue';
import VueResource from 'vue-resource';
import Element from 'element-ui';
import App from './App';
import store from './store';
import router from './router';

window.Tether = Tether;
window.jQuery = jQuery;
const Bootstrap = require('bootstrap');

Vue.use(Element);
Vue.use(VueResource);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#mobileCavalry',
  router,
  store,
  template: '<App/>',
  components: { App },
});
