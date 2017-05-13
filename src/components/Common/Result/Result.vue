<template>
  <div class="result">
    <div class="result__header row align-items-center">
      <img class="col-1 logo" :src="imgLogo()"/>
      <span class="col-7">{{platform}}</span>
      <button v-on:click="refresh()" class="col-4"><img src="~@Assets/facebook/refresh.svg">Refresh</button>
    </div>
    <div class="result__content row">
      <img v-if="isFinised()":src="imgDataResult().imageUrl" width="315" height="546"/>
      <img v-if="!isFinised()"
        :src="imgBlankResult()" width="315" height="546"/>
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
    refreshPlatforms: 'refreshPlatforms',
    getLookoutResults: 'getLookoutResults',
    createdLookoutResults: 'createdLookoutResults',
    getLookoutResultsByPlatform: 'getLookoutResultsByPlatform',
  }),
  methods: {
    imgLogo() {
      return req(`./${this.platform.toLowerCase()}.svg`);
    },
    imgBlankResult() {
      return req(`./blank-${this.platform.toLowerCase()}.png`);
    },
    isFinised() {
      if (this.refreshPlatforms.find(data => data === this.platform)) {
        console.log(this.getLookoutResultsByPlatform[this.platform]);
        return this.getLookoutResultsByPlatform[this.platform] &&
         this.getLookoutResultsByPlatform[this.platform].getLookoutResults.data.attributes.status === 'finished';
      }

      return this.getLookoutResults.data && this.getLookoutResults.data.attributes.status === 'finished';
    },
    imgDataResult() {
      if (this.refreshPlatforms.find(data => data === this.platform)) {
        return this.getLookoutResultsByPlatform[this.platform] &&
          this.getLookoutResultsByPlatform[this.platform].getLookoutResults.data
          .relationships.lookoutResponses.data[0];
      }
      return this.getLookoutResults.data && this.getLookoutResults.data.relationships
          .lookoutResponses.data.find(data => data.platform === this.platform);
    },
    refresh() {
      this.$store.dispatch('createdLookoutResults', this.platform);
    },
  },
};
</script>
