<template>
  <div class="lookout container">
    <search-comp />
    <result-facebook-comp />
  </div>
</template>

<script>
import Search from '../Search/Search';
import ResultFacebook from '../Result/Facebook/Facebook';

export default {
  name: 'lookout',
  components: {
    'search-comp': Search,
    'result-facebook-comp': ResultFacebook,
  },
};
</script>
