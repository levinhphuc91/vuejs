<template>
  <div class="home container">
    <h1 class="home__main-title">Test and Optimize Your Links Across Your Favorite Social and Messaging Platforms</h1>
    <div class="home__search-engine">
      <div class="home__search-engine__form row">
        <input class="home__search-engine__form__input col-10" placeholder="Your link here">
        <button class="home__search-engine__form__btn" v-on:click="onSearch">Test</button>
      </div>
    </div>
    <div class="learn-more">
      Learn how to optimize links across web, mobile, and messaging platforms. <a>Read now.</a>
    </div>
    <div class="benefits row">
      <div class="traffic col row align-items-center">
        <img src="../../assets/chart.svg" height="45"/>
        <span class="col">Drive more traffic and more conversions</span>
      </div>
      <div class="user-experience col row align-items-center">
        <img src="../../assets/heart.svg" height="45"/>
        <span class="col">Build trust and deliver  a better User Experience</span>
      </div>
      <div class="time col row align-items-center">
        <img src="../../assets/time.svg" height="45"/>
        <span class="col">Safe time. Test all platforms from 1 free dashboard</span>
      </div>
    </div>
    <div class="platforms">
      <span>Test your websites on 11 different platforms</span>
      <div class="platforms__icon-lists row justify-content-around">
        <img src="../../assets/fb.svg" height="35"/>
        <img src="../../assets/twitter.svg" height="35"/>
        <img src="../../assets/wechat.svg" height="35"/>
        <img src="../../assets/line.svg" height="35"/>
        <img src="../../assets/fb-msgr.svg" height="35"/>
        <img src="../../assets/slack.svg" height="35"/>
        <img src="../../assets/skype.svg" height="35"/>
        <img src="../../assets/imessage.svg" height="35"/>
        <img src="../../assets/snapchat.svg" height="35"/>
        <img src="../../assets/telegram.svg" height="35"/>
      </div>
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
