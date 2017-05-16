<template>
  <div class="about-us">
    <div class="about-us__header">
      <div class="container">
        <p class="about-us__header__title">Who Will Lead You to Victory</p>
        <p class="about-us__header__desc">5 peeps on Mobile Cavalry team will help you to become a better marketer, giving you a precious monthly marketing magazine and providing the most powerful tool marketers ever need.</p>
      </div>
    </div>
    <div class="container">
      <div class="about-us__body">
        <about-us-item :item="selected" />
      </div>
    </div>

    <div class="about-us__footer">
      <div class="container about-us__footer__wrapper">
        <p class="about-us__footer__title">What are you waiting for?</p>
        <p class="about-us__footer__desc">Lead Your Marketing Team To Victory</p>
        <button class="btn about-us__footer__join">Join Us</button>
      </div>
    </div>
  </div>
</template>

<script>
import DataProfile from './DataProfile';
import AboutUsItem from './AboutUs.Item';
import { HEADER_EV, CHANGE_PAGE } from '../../events/HeaderEvent';
import { INTEL_EV, CHANGE_PROFILE, NEXT_PROFILE, PREV_PROFILE } from '../../events/IntelEvent';

export default {
  name: 'about-us',
  components: {
    'about-us-item': AboutUsItem,
  },
  mounted() {
    this.selectedIdx = 0;
    this.selected = this.lists[this.selectedIdx];
  },
  data() {
    return {
      selectedIdx: null,
      selected: null,
      lists: DataProfile,
    };
  },
  created() {
    const maxIdxCharacter = this.lists.length - 1;
    const minIdxCharacter = 0;

    INTEL_EV.on(CHANGE_PROFILE, (index) => {
      this.selectedIdx = index;
      this.selected = this.lists[this.selectedIdx];
    });

    INTEL_EV.on(NEXT_PROFILE, () => {
      if (parseInt(this.selectedIdx, 0) >= maxIdxCharacter) {
        this.selectedIdx = 0;
      } else {
        this.selectedIdx = this.selectedIdx + 1;
      }
      this.selected = this.lists[this.selectedIdx];
    });

    INTEL_EV.on(PREV_PROFILE, () => {
      if (parseInt(this.selectedIdx, 0) <= minIdxCharacter) {
        this.selectedIdx = maxIdxCharacter;
      } else {
        this.selectedIdx = this.selectedIdx - 1;
      }
      this.selected = this.lists[this.selectedIdx];
    });
  },
  methods: {
    changeBGHeader() {
      HEADER_EV.emit(CHANGE_PAGE, 'about-us');
    },
  },
};
</script>
