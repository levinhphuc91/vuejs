<template>
  <div class="result">
    <div class="result__header row align-items-center">
      <img class="col-1 logo" src="../../../assets/lookout/fb.svg"/>
      <span class="col-8">Facebook</span>
      <button class="col-3">Refresh</button>
    </div>
    <div class="result__content row">
      <div class="result__content-border">
        <facebook-comp />
      </div>
    </div>
  </div>
</template>

<script>
import Facebook from '../Facebook/Facebook';

export default {
  name: 'result-comp',
  components: {
    'facebook-comp': Facebook,
  },
};
</script>
