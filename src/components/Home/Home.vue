<template>
  <div class="home container">
    <h1 class="home__main-title">Test and Optimize Your Links Across Your Favorite Social and Messaging Platforms</h1>
    <div class="home__search-engine">
      <div class="home__search-engine__form">
        <input class="home__search-engine__form__input" value="http://mybusiness.com/home-page/">
        <button class="home__search-engine__form__btn" v-on:click="onSearch">Test</button>
      </div>
    </div>
    <div class="learn-more">
      Learn how to optimize links across web, mobile, and messaging platforms. <a>Read now.</a>
    </div>
    <div class="benefits">
      <div class="traffic">
        <img src="../../assets/chart.png" height="50"/>
        <span>Drive more traffic and more conversions</span>
      </div>
      <div class="user-experience">
        <img src="../../assets/heart.png" height="50"/>
        <span>Build trust and deliver  a better User Experience</span>
      </div>
      <div class="time">
        <img src="../../assets/time.png" height="50"/>
        <span>Safe time. Test all platforms from 1 free dashboard</span>
      </div>
    </div>
    <div class="platforms">
      Safe time. Test all platforms from 1 free dashboard
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    onSearch() {
      this.$router.push('lookout');
    },
  },
};
</script>
