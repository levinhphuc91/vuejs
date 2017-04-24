<template>
  <div class="result-twitter">
    <div class="result-twitter__header">
      <!-- <signal-comp /> -->
      <img src="~@Assets/twitter/status-bar.svg">
      <!-- <div class="result-twitter__header-search row no-gutters align-items-center">
          <input class="col-11" type="text" placeholder="Search" />
          <img class="profile-menu col-1" src="~@Assets/twitter/user.svg" height="15">
          <img class="icon" src="~@Assets/twitter/search.svg" height="10">
      </div> -->
    </div>
    <div class="result-twitter__create-post">
      <!-- <div class="result-twitter__create-post__status">
        <span class="result-twitter__create-post__status__avatar"></span>
        <div class="result-twitter__create-post__status__form">
          <input class="result-twitter__create-post__status__form__input" type="text" placeholder="What's on your mind?" />
        </div>
      </div>
      <div class="result-twitter__create-post__tools">
        <span class="result-twitter__create-post__tools__live">Live</span>
        <span class="result-twitter__create-post__tools__photo">Photo</span>
        <span class="result-twitter__create-post__tools__check-in">Check In</span>
      </div> -->
    </div>

    <div class="result-twitter__tabs">
      <div class="justify-content-center row">
        <img class="col-2" src="~@Assets/twitter/home.svg"/>
        <img class="col-2" src="~@Assets/twitter/explore.svg"/>
        <img class="col-2" src="~@Assets/twitter/notif.svg"/>
        <img class="col-2" src="~@Assets/twitter/message.svg"/>
        <img class="col-2" src="~@Assets/twitter/me.svg"/>
      </div>
    </div>
  </div>
</template>

<script>
import Signal from '../Signal/Signal';

export default {
  name: 'twitter-comp',
  components: {
    'signal-comp': Signal,
  },
};
</script>
