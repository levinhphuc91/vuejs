import * as types from '../mutation-types';
import intelreport from '../../api/intel-report';

const state = {
  errors: {},
  getIntelReports: {},
  checkoutStatus: null,
};

// getters
const getters = {
  getIntelReports: state => state.getIntelReports,
};

// actions
const actions = {
  getIntelResults({ commit }) {
    commit(types.GET_INTEL_REPORT_REQUEST);
    intelreport.getIntelResults(
      getIntelReports =>
          commit(types.GET_INTEL_REPORT_SUCCESS, { getIntelReports }),
      error => commit(types.GET_INTEL_REPORT_FAILURE, { error }),
    );
  },
};

// mutations
const mutations = {
  [types.GET_INTEL_REPORT_REQUEST](state) {
    state.errors = {};
    state.getIntelReports = {};
    state.checkoutStatus = null;
  },
  [types.GET_INTEL_REPORT_SUCCESS](state, { getIntelReports }) {
    state.checkoutStatus = 'intel-report-success';
    state.getIntelReports = getIntelReports;
  },
  [types.GET_INTEL_REPORT_FAILURE](state, { error }) {
    state.checkoutStatus = 'intel-report-error';
    state.errors = error;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
