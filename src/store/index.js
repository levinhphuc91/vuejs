import Vue from 'vue';
import Vuex from 'vuex';
import lookoutresult from './modules/lookout-result';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lookoutresult,
  },
});
