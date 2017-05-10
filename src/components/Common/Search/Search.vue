<template>
  <div class="search row">
    <input class="search__input col-9 col-md-10" placeholder="Your link here">
    <button class="search__btn col-3 col-md-2" v-on:click="getLookoutResults">Test</button>
  </div>
</template>

<script>
export default {
  name: 'search-comp',
  methods: {
    onSearch() {
      this.$router.push('lookout');
    },
    getLookoutResults() {
      this.$store.dispatch('getLookoutResults', {
        results: {
          data: {
            type: 'LookoutRequest',
            attributes: {
              targetUrl: 'https://google.com',
              targetPlatforms: ['facebook', 'slack'],
            },
          },
        },
      });
    },
  },
};
</script>
