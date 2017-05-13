<template>
  <div class="result">
    <div class="result__header row align-items-center">
      <img class="col-1 logo" :src="imgLogo(platform)"/>
      <span class="col-7">{{platform}}</span>
      <button class="col-4"><img src="~@Assets/facebook/refresh.svg">Refresh</button>
    </div>
    <div class="result__content row">
      <img v-if="isFinised()":src="imgDataResult(platform).imageUrl" width="315" height="546"/>
      <img v-if="!isFinised()"
        :src="imgBlankResult(platform)" width="315" height="546"/>
    </div>
    <div class="progress" v-if="!isFinised()">
        <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const req = require.context('../../../assets/lookout', true, /^\.\/.*\.svg|png$/);
export default {
  name: 'result-comp',
  props: ['platform'],
  computed: mapGetters({
    getLookoutResults: 'getLookoutResults',
    createdLookoutResults: 'createdLookoutResults',
  }),
  methods: {
    imgLogo(platform) {
      return req(`./${platform.toLowerCase()}.svg`);
    },
    imgBlankResult(platform) {
      return req(`./blank-${platform.toLowerCase()}.png`);
    },
    isFinised() {
      return this.getLookoutResults.data && this.getLookoutResults.data.attributes.status === 'finished';
    },
    imgDataResult(platform) {
      return this.getLookoutResults.data &&
      this.getLookoutResults.data.relationships.lookoutResponses.data
      .find(data => data.platform === platform);
    },
  },
};
</script>
