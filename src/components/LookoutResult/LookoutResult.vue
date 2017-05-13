<template>
  <div class="lookout-result">
    <div class="container">
      <search-comp />
      <div class="lookout-result__content row justify-content-around">
        <result-comp class="col-10 col-md-6 lookout-result__content__screen" v-for="platform in requestAllLookouts.data.attributes.targetPlatforms" :platform="platform">
        </result-comp>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Search, Result } from '../Common';

export default {
  name: 'lookout-result',
  components: {
    'search-comp': Search,
    'result-comp': Result,
  },
  computed: mapGetters({
    requestAllLookouts: 'requestAllLookouts',
  }),
};
</script>
