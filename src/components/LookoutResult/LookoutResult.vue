<template>
  <div class="container">
    <div>
      <search-comp />
    </div>
    <div class="lookout__result row justify-content-around" v-if="getLookoutResults.data">
      <result-comp class="col-10 col-md-6 lookout__result__screen" v-for="platform in getLookoutResults.data.relationships.lookoutResponses.data" :platform="platform">
      </result-comp>
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
    getLookoutResults: 'getLookoutResults',
  }),
};
</script>
