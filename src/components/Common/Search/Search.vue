<template>
  <div class="search row">
    <input class="search__input col-9 col-md-10" placeholder="Your link here">
    <button class="search__btn col-3 col-md-2" v-on:click="onSearch">Test</button>
  </div>
</template>

<script>
export default {
  name: 'search-comp',
  methods: {
    onSearch() {
      this.$router.push('lookout');
    },
  },
};
</script>
