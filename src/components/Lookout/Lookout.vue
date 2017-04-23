<template>
  <div class="lookout container">
    <result-facebook-comp />
  </div>
</template>

<script>
import ResultFacebook from '../Result/Facebook/Facebook';

export default {
  name: 'lookout',
  components: {
    'result-facebook-comp': ResultFacebook,
  },
};
</script>
