<template>
  <div class="container">
    <div class="result-facebook">
      <div class="result-facebook__header">
        <div class="result-facebook__header-top">
          <span class="result-facebook__header-top__signal"></span>
          <span class="result-facebook__header-top__time"></span>
          <span class="result-facebook__header-top__battery"></span>
        </div>

        <div class="result-facebook__header-search">
          <div class="result-facebook__header-search__form">
            <span class="result-facebook__header-search__form__icon"></span>
            <input class="result-facebook__header-search__form__input" type="text" placeholder="Search" />
          </div>
          <span class="result-facebook__header-profile-menu"></span>
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
        <span class="result-facebook__tabs__home"></span>
        <span class="result-facebook__tabs__friend"></span>
        <span class="result-facebook__tabs__chat"></span>
        <span class="result-facebook__tabs__public-mode"></span>
        <span class="result-facebook__tabs__menu"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'result-facebook-comp',
};
</script>
