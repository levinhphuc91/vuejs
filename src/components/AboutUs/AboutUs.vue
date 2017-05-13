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
        <div class="about-us__item__bottom">
          <button class="about-us__item__bottom__prev" v-on:click="onPrev()" :disabled="selectedIdx < 1 ? true : false">PREVIOUS</button>
          <button class="about-us__item__bottom__next" v-on:click="onNext()" :disabled="selectedIdx === lists.length - 1 ? true : false">NEXT</button>
        </div>
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
import { HEADER_EV, CHANGE_PAGE } from '../../events/HeaderEvent';

import AboutUsItem from './AboutUs.Item';

export default {
  name: 'about-us',
  components: {
    'about-us-item': AboutUsItem,
  },
  mounted() {
    this.changeBGHeader();
    this.selectedIdx = 0;
    this.selected = this.lists[this.selectedIdx];
    console.log(this.selected);
  },
  methods: {
    changeBGHeader() {
      HEADER_EV.emit(CHANGE_PAGE, 'about-us');
    },
    onSelect(x) {
      console.log(x);
    },
    onNext() {
      this.selectedIdx = this.selectedIdx + 1;
      this.selected = this.lists[this.selectedIdx];
    },
    onPrev() {
      this.selectedIdx = this.selectedIdx - 1;
      this.selected = this.lists[this.selectedIdx];
    },
  },
  data() {
    return {
      selectedIdx: null,
      selected: null,
      lists: [
        { id: 'lady', name: 'Lady', aka: 'Notorious Notable', desc: 'Epic cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. <br /> They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun.' },
        { id: 'sumo', name: 'Sumo', aka: 'Notorious Notable', desc: 'Epic cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. <br /> They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun.' },
        { id: 'leader', name: 'Leader', aka: 'Notorious Notable', desc: 'Epic cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. <br /> They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun.' },
        { id: 'lala', name: 'lala', aka: 'Notorious Notable', desc: 'Epic cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. <br /> They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun.' },
        { id: 'hacker', name: 'Hacker', aka: 'Notorious Notable', desc: 'Epic cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. <br /> They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun.' },
      ],
    };
  },
};
</script>
