import lookoutresult from '../../api/lookout-result';
import * as types from '../mutation-types';

// initial state
const state = {
  results: [],
  checkoutStatus: null,
};

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,
};

// actions
const actions = {
  getLookoutResults({ commit, state }, request) {
    const lookoutResults = [...state.results];
    commit(types.LOOKOUT_RESULT_REQUEST);
    lookoutresult.getLookoutResults(
      request,
      () => commit(types.LOOKOUT_RESULT_SUCCESS),
      () => commit(types.LOOKOUT_RESULT_FAILURE, { lookoutResults }),
    );
  },
};

// mutations
const mutations = {
  [types.LOOKOUT_RESULT_REQUEST](state) {
    // clear cart
    state.results = [];
    state.checkoutStatus = null;
  },
  [types.LOOKOUT_RESULT_SUCCESS](state) {
    state.checkoutStatus = 'successful';
  },
  [types.LOOKOUT_RESULT_FAILURE](state, { lookoutResults }) {
    // rollback to the cart saved before sending the request
    state.results = lookoutResults;
    state.checkoutStatus = 'failed';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
