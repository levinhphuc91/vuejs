import lookoutresult from '../../api/lookout-result';
import * as types from '../mutation-types';

// initial state
const state = {
  errors: {},
  requestAllLookouts: {
    data: {
      type: 'LookoutRequest',
      attributes: {
        targetUrl: '',
        targetPlatforms: ['facebook', 'slack', 'wechat', 'whatsapp', 'line'],
      },
    },
  },
  getLookoutResults: {},
  createLookoutResults: {},
  checkoutStatus: null,
};

// getters
const getters = {
  url: state => state.requestAllLookouts.data.attributes.targetUrl,
  getLookoutResults: state => state.getLookoutResults,
  createdLookoutResults: state => state.createLookoutResults,
  checkoutStatus: state => state.checkoutStatus,
};

// actions
const actions = {
  createdLookoutResults({ commit, state }) {
    commit(types.CREATE_LOOKOUT_RESULT_REQUEST);
    lookoutresult.createdLookoutResults(
      state.requestAllLookouts,
      createdLookoutResults =>
          commit(types.CREATE_LOOKOUT_RESULT_SUCCESS, { createdLookoutResults, commit }),
      error => commit(types.CREATE_LOOKOUT_RESULT_FAILURE, { error }),
    );
  },
  getLookoutResults({ commit, state }, id) {
    const request = () => {
      commit(types.GET_LOOKOUT_RESULT_REQUEST);
      lookoutresult.getLookoutResults(
        id,
        getLookoutResults => commit(types.GET_LOOKOUT_RESULT_SUCCESS, { getLookoutResults }),
        error => commit(types.GET_LOOKOUT_RESULT_FAILURE, { error }),
      );
      if (!(state.getLookoutResults.data && state.getLookoutResults.data.attributes
        && state.getLookoutResults.data.attributes.status === 'finished')) {
        setTimeout(request, 1000);
      }
    };
    setTimeout(request, 1000);
  },
};


// mutations
const mutations = {
  [types.CREATE_LOOKOUT_RESULT_REQUEST](state) {
    state.errors = {};
    state.getLookoutResults = {};
    state.createLookoutResults = {};
    state.checkoutStatus = null;
  },
  [types.CREATE_LOOKOUT_RESULT_SUCCESS](state, { createdLookoutResults, commit }) {
    state.createLookoutResults = createdLookoutResults;
    state.checkoutStatus = 'lookout-pending';
    actions.getLookoutResults({ commit, state }, createdLookoutResults.data.id);
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
  updateUrl(state, url) {
    state.requestAllLookouts.data.attributes.targetUrl = url;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
