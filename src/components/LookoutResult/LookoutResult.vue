<template>
  <div class="lookout">
    <div class="container">
      <div>
        <search-comp />
      </div>
      <div class="lookout__result row justify-content-around" v-if="getLookoutResults.data">
        <div v-for="data in getLookoutResults.data.relationships.lookoutResponses.data">
          <span>{{data.platform}}</span>
          <img :src="data.imageUrl"/>
        </div>
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
    getLookoutResults: 'getLookoutResults',
  }),
};
</script>
