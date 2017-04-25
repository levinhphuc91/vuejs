<template>
  <div class="result-facebook">
    <div class="result-facebook__header">
      <signal-comp />
      <div class="result-facebook__header-search row no-gutters align-items-center">
          <input class="col-11" type="text" placeholder="Search" />
          <img class="profile-menu col-1" src="~@Assets/facebook/user.svg" height="15">
          <img class="icon" src="~@Assets/facebook/search.svg" height="10">
      </div>
    </div>
    <div class="result-facebook__create-post">
      <div class="result-facebook__create-post__status">
        <span class="result-facebook__create-post__status__avatar"></span>
        <div class="result-facebook__create-post__status__form">
          <input class="result-facebook__create-post__status__form__input" type="text" placeholder="What's on your mind?" />
        </div>
      </div>
      <div class="result-facebook__create-post__tools">
        <span class="result-facebook__create-post__tools__live">Live</span>
        <span class="result-facebook__create-post__tools__photo">Photo</span>
        <span class="result-facebook__create-post__tools__check-in">Check In</span>
      </div>
    </div>

    <div class="result-facebook__tabs">
      <div class="justify-content-center row">
        <img class="col-2" src="~@Assets/facebook/feed.svg"/>
        <img class="col-2" src="~@Assets/facebook/friend.svg"/>
        <img class="col-2" src="~@Assets/facebook/fb-messenger.svg"/>
        <img class="col-2" src="~@Assets/facebook/globe-icon.svg"/>
        <img class="col-2" src="~@Assets/facebook/menu-icon.svg"/>
      </div>
    </div>
  </div>
</template>

<script>
import Signal from '../Signal/Signal';

export default {
  name: 'facebook-comp',
  components: {
    'signal-comp': Signal,
  },
};
</script>
