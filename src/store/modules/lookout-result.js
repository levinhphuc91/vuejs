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
        targetPlatforms: [],
      },
    },
  },
  getLookoutResults: {},
  createLookoutResults: {},
  refreshPlatforms: [],
  getLookoutResultsByPlatform: {},
  checkoutStatus: null,
};

// getters
const getters = {
  url: state => state.requestAllLookouts.data.attributes.targetUrl,
  refreshPlatforms: state => state.refreshPlatforms,
  getLookoutResults: state => state.getLookoutResults,
  requestAllLookouts: state => state.requestAllLookouts,
  createdLookoutResults: state => state.createLookoutResults,
  checkoutStatus: state => state.checkoutStatus,
  getLookoutResultsByPlatform: state => state.getLookoutResultsByPlatform,
};

// actions
const actions = {
  createdLookoutResults({ commit, state }, platform) {
    if (platform) {
      if (!state.refreshPlatforms.find(data => data === platform)) {
        state.refreshPlatforms.push(platform);
      }
    } else {
      state.refreshPlatforms = [];
    }
    commit(types.CREATE_LOOKOUT_RESULT_REQUEST, platform);
    lookoutresult.createdLookoutResults(
      state.requestAllLookouts,
      createdLookoutResults =>
          commit(types.CREATE_LOOKOUT_RESULT_SUCCESS, { createdLookoutResults, commit, platform }),
      error => commit(types.CREATE_LOOKOUT_RESULT_FAILURE, { error }),
    );
  },
  getLookoutResults({ commit, state }, id, platform) {
    const request = () => {
      commit(types.GET_LOOKOUT_RESULT_REQUEST);
      lookoutresult.getLookoutResults(
        id,
        getLookoutResults =>
            commit(types.GET_LOOKOUT_RESULT_SUCCESS, { getLookoutResults, platform }),
        error => commit(types.GET_LOOKOUT_RESULT_FAILURE, { error }),
      );
      if (platform) {
        if (!(state.getLookoutResultsByPlatform[platform].getLookoutResults.data
          && state.getLookoutResultsByPlatform[platform].getLookoutResults.data.attributes
          && state.getLookoutResultsByPlatform[platform].getLookoutResults.data.attributes.status === 'finished')) {
          console.log('request');
          setTimeout(request, 1000);
        }
      } else if (!(state.getLookoutResults.data && state.getLookoutResults.data.attributes
        && state.getLookoutResults.data.attributes.status === 'finished')) {
        console.log('request');
        setTimeout(request, 1000);
      }
    };
    setTimeout(request, 1000);
  },
};


// mutations
const mutations = {
  [types.CREATE_LOOKOUT_RESULT_REQUEST](state, platform) {
    state.errors = {};
    state.checkoutStatus = null;
    if (platform) {
      state.requestAllLookouts.data.attributes.targetPlatforms = [];
      state.requestAllLookouts.data.attributes.targetPlatforms.push(platform);
    } else {
      state.getLookoutResults = {};
      state.createLookoutResults = {};
      state.getLookoutResultsByPlatform = {};
      state.requestAllLookouts.data.attributes.targetPlatforms = [
        'facebook',
        'twitter',
        'wechat',
        'whatsapp',
        'line',
        'line_timeline',
        'slack',
        'skype',
        'imessage',
        'telegram',
      ];
    }
  },
  [types.CREATE_LOOKOUT_RESULT_SUCCESS](state, { createdLookoutResults, commit, platform }) {
    if (platform) {
      state.getLookoutResultsByPlatform[platform] = {};
      state.getLookoutResultsByPlatform[platform].createdLookoutResults = createdLookoutResults;
      state.getLookoutResultsByPlatform[platform].getLookoutResults = {};
    } else {
      state.createLookoutResults = createdLookoutResults;
    }
    state.checkoutStatus = 'lookout-pending';
    actions.getLookoutResults({ commit, state }, createdLookoutResults.data.id, platform);
  },
  [types.CREATE_LOOKOUT_RESULT_FAILURE](state, { error }) {
    state.errors = error;
    state.checkoutStatus = 'failed';
  },
  [types.GET_LOOKOUT_RESULT_REQUEST](state) {
    state.checkoutStatus = 'lookout-get-request';
  },
  [types.GET_LOOKOUT_RESULT_SUCCESS](state, { getLookoutResults, platform }) {
    if (platform) {
      if (getLookoutResults.data.attributes.status === 'finished') {
        // TODO find out the reason why it is not update
        const getLookoutResultsByPlatform = state.getLookoutResultsByPlatform;
        state.getLookoutResultsByPlatform = {};
        state.getLookoutResultsByPlatform = getLookoutResultsByPlatform;
        state.getLookoutResultsByPlatform[platform].getLookoutResults = getLookoutResults;
      }
    } else {
      state.getLookoutResults = getLookoutResults;
    }
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
