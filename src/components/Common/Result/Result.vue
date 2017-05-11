<template>
  <div class="result">
    <div class="result__header row align-items-center">
      <!-- <img class="col-1 logo" src="~@Assets/lookout/facebook.svg"/> -->
      <img class="col-1 logo" :src="imgUrl(platform.platform)"/>
      <span class="col-7">{{platform.platform}}</span>
      <button class="col-4"><img src="~@Assets/facebook/refresh.svg">Refresh</button>
    </div>
    <div class="result__content row">
      <img :src="platform.imageUrl" width="315" height="546"/>
    </div>
  </div>
</template>

<script>

const req = require.context('../../../assets/lookout', true, /^\.\/.*\.svg$/);
export default {
  name: 'result-comp',
  props: ['platform'],
  methods: {
    imgUrl(path) {
      return req(`./${path.toLowerCase()}.svg`);
    },
  },
};
</script>
