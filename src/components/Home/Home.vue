<template>
  <div class="home container">
    <h1 class="home__main-title">Test and Optimize Your Links Across Your Favorite Social and Messaging Platforms</h1>
    <search-comp />
    <div class="home__learn-more">
      Learn how to optimize links across web, mobile, and messaging platforms. <a href="#">Read now.</a>
    </div>
    <div class="home__benefits row">
      <div class="traffic col col-md align-items-center row">
        <img class="col-3" src="../../assets/chart.svg" height="45"/>
        <span class="col-9">Drive more traffic and more conversions</span>
      </div>
      <div class="user-experience col-12 col-md align-items-center row">
        <img class="col-3" src="../../assets/heart.svg" height="45"/>
        <span class="col-9">Build trust and deliver  a better User Experience</span>
      </div>
      <div class="time col-12 col-md align-items-center row">
        <img class="col-3" src="../../assets/time.svg" height="45"/>
        <span class="col-9">Safe time. Test all platforms from 1 free dashboard</span>
      </div>
    </div>
    <div class="home__platforms">
      <div>Test your websites on 11 different platforms</div>
      <div class="home__platforms__icon-lists row justify-content-center">
        <img class="col-2 col-md-1" src="../../assets/fb.svg" height="35"/>
        <img class="col-2 col-md-1" src="../../assets/twitter.svg" height="35"/>
        <img class="col-2 col-md-1" src="../../assets/wechat.svg" height="35"/>
        <img class="col-2 col-md-1" src="../../assets/line.svg" height="35"/>
        <img class="col-2 col-md-1" src="../../assets/wa.svg" height="35"/>
        <img class="col-2 col-md-1" src="../../assets/fb-msgr.svg" height="35"/>
        <img class="col-2 col-md-1" src="../../assets/slack.svg" height="35"/>
        <img class="col-2 col-md-1" src="../../assets/skype.svg" height="35"/>
        <img class="col-2 col-md-1" src="../../assets/imessage.svg" height="35"/>
        <img class="col-2 col-md-1" src="../../assets/snapchat.svg" height="35"/>
        <img class="col-2 col-md-1" src="../../assets/telegram.svg" height="35"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from '../Common';

export default {
  name: 'home',
  components: {
    'search-comp': Search,
  },
};
</script>
