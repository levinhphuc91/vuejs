<template>
  <div class="lookout container">
    <search-comp />
  </div>
</template>

<script>
import Search from '../Search/Search';

export default {
  name: 'lookout',
  components: {
    'search-comp': Search,
  },
};
</script>
