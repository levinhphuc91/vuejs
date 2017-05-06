<template>
  <div class="home container">
    <h1 class="home__main-title">Test and Optimize Your Links Across Your Favorite Social and Messaging Platforms</h1>
    <search-comp />
    <div class="home__learn-more">
      Learn how to optimize links across web, mobile, and messaging platforms. <a href="#">Read now.</a>
    </div>
    <div class="home__benefits row">
      <div class="traffic col col-md align-items-center row">
        <img class="col-3" src="~@Assets/chart.svg" height="45"/>
        <span class="col-9">Drive more traffic and more conversions</span>
      </div>
      <div class="user-experience col-12 col-md align-items-center row">
        <img class="col-3" src="~@Assets/heart.svg" height="45"/>
        <span class="col-9">Build trust and deliver  a better User Experience</span>
      </div>
      <div class="time col-12 col-md align-items-center row">
        <img class="col-3" src="~@Assets/time.svg" height="45"/>
        <span class="col-9">Safe time. Test all platforms from 1 free dashboard</span>
      </div>
    </div>
    <div class="home__platforms">
      <div>Test your websites on 11 different platforms</div>
      <div class="home__platforms__icon-lists row justify-content-center">
        <img class="col-2 col-md-1" src="~@Assets/fb.svg" height="35"/>
        <img class="col-2 col-md-1" src="~@Assets/twitter.svg" height="35"/>
        <img class="col-2 col-md-1" src="~@Assets/wechat.svg" height="35"/>
        <img class="col-2 col-md-1" src="~@Assets/line.svg" height="35"/>
        <img class="col-2 col-md-1" src="~@Assets/wa.svg" height="35"/>
        <img class="col-2 col-md-1" src="~@Assets/fb-msgr.svg" height="35"/>
        <img class="col-2 col-md-1" src="~@Assets/slack.svg" height="35"/>
        <img class="col-2 col-md-1" src="~@Assets/skype.svg" height="35"/>
        <img class="col-2 col-md-1" src="~@Assets/imessage.svg" height="35"/>
        <img class="col-2 col-md-1" src="~@Assets/snapchat.svg" height="35"/>
        <img class="col-2 col-md-1" src="~@Assets/telegram.svg" height="35"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from '../Common';
import { HEADER_EV, MC_PAGE } from '../../events/HeaderEvent';

export default {
  name: 'lookout',
  components: {
    'search-comp': Search,
  },
  mounted() {
    this.changeBGHeader();
  },
  methods: {
    changeBGHeader() {
      HEADER_EV.emit(MC_PAGE, false);
    },
  },
};
</script>
