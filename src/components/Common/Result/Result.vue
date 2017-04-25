<template>
  <div class="result">
    <div class="result__header row align-items-center">
      <!-- <img class="col-1 logo" src="~@Assets/lookout/facebook.svg"/> -->
      <img class="col-1 logo" :src="imgUrl(platform)"/>
      <span class="col-7">{{platform}}</span>
      <button class="col-4"><img src="~@Assets/facebook/refresh.svg">Refresh</button>
    </div>
    <div class="result__content row">
      <div class="result__content-border">
        <facebook-comp v-if="platform === 'Facebook'"/>
        <twitter-comp v-if="platform === 'Twitter'"/>
      </div>
    </div>
  </div>
</template>

<script>
import Facebook from '../Facebook/Facebook';
import Twitter from '../Twitter/Twitter';

const req = require.context('../../../assets/lookout', true, /^\.\/.*\.svg$/);
export default {
  name: 'result-comp',
  props: ['platform'],
  components: {
    'facebook-comp': Facebook,
    'twitter-comp': Twitter,
  },
  methods: {
    imgUrl(path) {
      return req(`./${path.toLowerCase()}.svg`);
    },
  },
};
</script>
