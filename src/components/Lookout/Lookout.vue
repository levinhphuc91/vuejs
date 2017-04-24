<template>
  <div class="lookout">
    <div class="container">
      <div>
        <search-comp />
      </div>
      <div class="lookout__result row justify-content-around">
        <div class="col-3 lookout__result__screen"><result-comp /></div>
        <div class="col-3 lookout__result__screen"><result-comp /></div>
        <div class="w-100"></div>
        <div class="col-3 lookout__result__screen"><result-comp /></div>
        <div class="col-3 lookout__result__screen"><result-comp /></div>
        <div class="w-100"></div>
        <div class="col-3 lookout__result__screen"><result-comp /></div>
        <div class="col-3 lookout__result__screen"><result-comp /></div>
        <div class="w-100"></div>
        <div class="col-3 lookout__result__screen"><result-comp /></div>
        <div class="col-3 lookout__result__screen"><result-comp /></div>
      </div>
    </div>
    </div>
</template>

<script>
import { Search, Result } from '../Common';

export default {
  name: 'lookout',
  components: {
    'search-comp': Search,
    'result-comp': Result,
  },
};
</script>
