<template>
  <div class="search row">
    <input class="search__input col-9 col-md-10" placeholder="Your link here" v-model="url">
    <button class="search__btn col-3 col-md-2" v-on:click="createdLookoutResults">Test</button>
  </div>
</template>

<script>
export default {
  name: 'search-comp',
  data() {
    return {
      url: '',
    };
  },
  methods: {
    createdLookoutResults() {
      this.$store.dispatch('createdLookoutResults', {
        data: {
          type: 'LookoutRequest',
          attributes: {
            targetUrl: this.url,
            targetPlatforms: ['facebook', 'slack'],
          },
        },
      });
      this.$router.push('lookout-result');
    },
  },
};
</script>
