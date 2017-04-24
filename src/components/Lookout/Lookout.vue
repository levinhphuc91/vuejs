<template>
  <div class="lookout">
    <div class="container">
      <div>
        <search-comp />
      </div>
      <div class="lookout__result row justify-content-around">
        <div class="col-10 col-md-3 lookout__result__screen"><result-comp platform="Facebook"/></div>
        <div class="col-10 col-md-3 lookout__result__screen"><result-comp platform="Twitter"/></div>
        <div class="w-100"></div>
        <div class="col-10 col-md-3 lookout__result__screen"><result-comp platform="WeChat"/></div>
        <!-- <div class="col-10 col-md-3 lookout__result__screen"><result-comp platform="Whatsapp"/></div> -->
        <div class="w-100"></div>
        <div class="col-10 col-md-3 lookout__result__screen"><result-comp platform="Line"/></div>
        <div class="col-10 col-md-3 lookout__result__screen"><result-comp platform="Line Timeline"/></div>
        <div class="w-100"></div>
        <div class="col-10 col-md-3 lookout__result__screen"><result-comp platform="FB messenger"/></div>
        <div class="col-10 col-md-3 lookout__result__screen"><result-comp platform="Slack"/></div>
        <div class="w-100"></div>
        <div class="col-10 col-md-3 lookout__result__screen"><result-comp platform="Skype"/></div>
        <div class="col-10 col-md-3 lookout__result__screen"><result-comp platform="iMessage"/></div>
        <div class="w-100"></div>
        <div class="col-10 col-md-3 lookout__result__screen"><result-comp platform="Snapchat"/></div>
        <div class="col-10 col-md-3 lookout__result__screen"><result-comp platform="Telegram"/></div>
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
