<template>
  <div id="mobileCavalry">
    <header-comp />
    <div class="app-container">
      <router-view></router-view>
    </div>
    <footer-comp />
  </div>
</template>

<script>
import { Header, Footer } from '@Component';

/* eslint-disable no-console */
export default {
  name: 'app',
  components: {
    'header-comp': Header,
    'footer-comp': Footer,
  },
};
</script>

<style lang="sass">
  @import "./styles/app.scss"
</style>
