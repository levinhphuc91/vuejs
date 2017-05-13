<template>
  <div class="search row">
    <input class="search__input col-9 col-md-10" v-bind:class="{ 'search__input-error': isError }" placeholder="Your link here" :value="url" @input="updateUrl">
    <button class="search__btn col-3 col-md-2" v-on:click="createdLookoutResults">Test</button>
    <div class="search__error col-9 col-md-10" v-if="isError">Website address is incorrect!</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'search-comp',
  data() {
    return {
      isError: false,
    };
  },
  computed: mapGetters({
    url: 'url',
  }),
  methods: {
    createdLookoutResults() {
      if (this.validateUrl(this.url)) {
        this.$store.dispatch('createdLookoutResults');
        this.$router.push('lookout-result');
      } else {
        this.isError = true;
      }
    },
    updateUrl(e) {
      this.$store.commit('updateUrl', e.target.value);
    },
    validateUrl(url) {
      const re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
      return re.test(url);
    },
  },
};
</script>
