import lookoutresult from '../../api/lookout-result';
import * as types from '../mutation-types';

// initial state
const state = {
  errors: {},
  getLookoutResults: {},
  createLookoutResults: {},
  checkoutStatus: null,
};

// getters
const getters = {
  getLookoutResults: state => state.getLookoutResults,
  createdLookoutResults: state => state.createLookoutResults,
  checkoutStatus: state => state.checkoutStatus,
};

// actions
const actions = {
  createdLookoutResults({ commit, state }, requests) {
    commit(types.CREATE_LOOKOUT_RESULT_REQUEST);
    lookoutresult.createdLookoutResults(
      requests,
      createdLookoutResults =>
          commit(types.CREATE_LOOKOUT_RESULT_SUCCESS, { createdLookoutResults, commit }),
      error => commit(types.CREATE_LOOKOUT_RESULT_FAILURE, { error }),
    );
  },
  getLookoutResults({ commit, state }, id) {
    console.log(id);
    commit(types.GET_LOOKOUT_RESULT_REQUEST);
    lookoutresult.getLookoutResults(
      id,
      getLookoutResults => commit(types.GET_LOOKOUT_RESULT_SUCCESS, { getLookoutResults }),
      error => commit(types.GET_LOOKOUT_RESULT_FAILURE, { error }),
    );
  },
};

// mutations
const mutations = {
  [types.CREATE_LOOKOUT_RESULT_REQUEST](state) {
    // clear cart
    state.errors = {};
    state.getLookoutResults = {};
    state.createLookoutResults = {};
    state.checkoutStatus = null;
  },
  [types.CREATE_LOOKOUT_RESULT_SUCCESS](state, { createdLookoutResults, commit }) {
    state.createLookoutResults = createdLookoutResults;
    state.checkoutStatus = 'lookout-pending';
    console.log(state.checkoutStatus);
    setTimeout(actions.getLookoutResults({ commit, state }, createdLookoutResults.data.id), 2000);
  },
  [types.CREATE_LOOKOUT_RESULT_FAILURE](state, { error }) {
    state.errors = error;
    state.checkoutStatus = 'failed';
  },
  [types.GET_LOOKOUT_RESULT_REQUEST](state) {
    state.checkoutStatus = 'lookout-get-request';
  },
  [types.GET_LOOKOUT_RESULT_SUCCESS](state, { getLookoutResults }) {
    state.getLookoutResults = getLookoutResults;
    state.checkoutStatus = 'lookout-success';
  },
  [types.GET_LOOKOUT_RESULT_FAILURE](state, { error }) {
    state.errors = error;
    state.checkoutStatus = 'failed';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
