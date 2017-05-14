import Vue from 'vue';
import Vuex from 'vuex';
import lookoutresult from './modules/lookout-result';
import intelreport from './modules/intel-report';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    intelreport,
    lookoutresult,
  },
});
