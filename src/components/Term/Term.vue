<template lang="html">
  <div class="term">
    <div class="term__title">Mobile Cavalry Terms</div>
    <div class="term__content">
      <div class="term__content__sub-title">
        Overview
      </div>
      <p>
        Epic cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra urna risus, ut consectetur est facilisis at. Phasellus ullamcorper massa vitae purus finibus dapibus. Quisque rhoncus ipsum sem, at tincidunt enim tincidunt eu. Suspendisse eleifend nisl id nibh pellentesque rhoncus. Praesent ipsum nisi, lacinia quis sapien non, ultricies commodo nisi. Vestibulum et gravida urna. Aliquam erat volutpat. Fusce quis ullamcorper nisi. Fusce quis luctus velit. Sed vel scelerisque est. Phasellus aliquet tincidunt vehicula.
      </p>
      <p>
        Sed in felis metus. Quisque feugiat, velit et consectetur fringilla, justo augue rutrum sem, quis sollicitudin mauris purus et dolor.
      </p>
      <div class="term__content__list">
        <div class="row no-gutters">
          <div class="dot"></div>
          <p class="col">Nulla eleifend elit quis est condimentum aliquet.</p>
        </div>
        <div class="row no-gutters">
          <div class="dot"></div>
          <p class="col">Sed in felis metus. Quisque feugiat, velit et consectetur fringilla, justo augue rutrum sem, quis sollicitudin mauris purus et dolor.</p>
        </div>
        <div class="row no-gutters">
          <div class="dot"></div>
          <p class="col">Fusce interdum sapien non nulla scelerisque aliquam. Sed ornare nisi dui, vel pellentesque urna facilisis a. Morbi a lacinia justo, vel vulputate est. </p>
        </div>
      </div>
      <img src="~@Assets/term/term-photo.png" width="100%"/>
      <div class="term__content__caption">Photo by <span class="underline">Pexels</span></div>
      <p class="term__content__quotes">
        “Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful, that's what matters to me” <span>— Steve Jobs</span>
      </p>
      <p>
        Phasellus ullamcorper massa vitae purus finibus dapibus. Quisque rhoncus ipsum sem, at tincidunt enim tincidunt eu. Suspendisse eleifend nisl id nibh pellentesque rhoncus. Praesent ipsum nisi, lacinia quis sapien non, ultricies commodo nisi. Vestibulum et gravida urna. Aliquam erat volutpat. Fusce quis ullamcorper nisi. Fusce quis luctus velit. Sed vel scelerisque est. Phasellus aliquet tincidunt vehicula.
      </p>
      <div class="term__content__list">
        <div class="row no-gutters">
          <div class="number">1.</div>
          <p class="col">Nulla eleifend elit quis est condimentum aliquet.</p>
        </div>
        <div class="row no-gutters">
          <div class="number">2.</div>
          <p class="col">Sed in felis metus. Quisque feugiat, velit et consectetur fringilla, justo augue rutrum sem, quis sollicitudin mauris purus et dolor.</p>
        </div>
        <div class="row no-gutters">
          <div class="number">3.</div>
          <p class="col">Fusce interdum sapien non nulla scelerisque aliquam. Sed ornare nisi dui, vel pellentesque urna facilisis a. Morbi a lacinia justo, vel vulputate est. </p>
        </div>
      </div>
      <p>
        Nulla eleifend elit quis est condimentum aliquet. Pellentesque pellentesque vulputate nulla at vulputate. Suspendisse potenti. Vivamus at neque ac nisl dapibus hendrerit. Ut laoreet metus vitae tincidunt pharetra.
      </p>
    </div>
  </div>
</template>

<script>
import { HEADER_EV, MC_PAGE } from '../../events/HeaderEvent';

export default {
  name: 'mc-term',
  mounted() {
    this.changeBGHeader();
  },
  methods: {
    changeBGHeader() {
      HEADER_EV.emit(MC_PAGE, false);
    },
  },
};
</script>

<style lang="css">
</style>
