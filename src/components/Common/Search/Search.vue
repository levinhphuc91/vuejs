<template>
  <div class="search row">
    <input class="search__input col-9 col-md-10" placeholder="Your link here" :value="url" @input="updateUrl">
    <button class="search__btn col-3 col-md-2" v-on:click="createdLookoutResults">Test</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'search-comp',
  computed: mapGetters({
    url: 'url',
  }),
  methods: {
    createdLookoutResults() {
      if (this.url.length > 0) {
        this.$store.dispatch('createdLookoutResults');
        this.$router.push('lookout-result');
      }
    },
    updateUrl(e) {
      this.$store.commit('updateUrl', e.target.value);
    },
  },
};
</script>
