<template>
  <div class="lookout-result">
    <div class="container">
      <search-comp />
      <div class="lookout-result__content row justify-content-around">
        <result-comp class="col-12 col-md-6 lookout-result__content__screen" v-for="platform in listPlatform" :platform="platform">
        </result-comp>
      </div>
      <search-comp />
    </div>
  </div>
</template>

<script>
import { Search, Result } from '../Common';

export default {
  name: 'lookout-result',
  components: {
    'search-comp': Search,
    'result-comp': Result,
  },
  data() {
    return {
      listPlatform: [
        'facebook',
        'twitter',
        'wechat',
        'whatsapp',
        'line',
        'line_timeline',
        'slack',
        'skype',
        'imessage',
        'telegram',
      ],
    };
  },
};
</script>
