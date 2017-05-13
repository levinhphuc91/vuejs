<template>
  <div class="mc">
    <section class="mc__container-header">
      <div class="container">
        <div class="row title justify-content-center">
          Stop Being A Dumb Ass Marketer
        </div>
        <div class="sub-title row justify-content-center">
          Bloody Brilliant <span class="hidden-md-up">Mobiles</span><span>Tools</span> & <span>Strategies</span> for Marketing Professionals
        </div>
        <div class="row justify-content-center">
          <button>
            Join us
          </button>
        </div>
        <div class="row justify-content-center">
          <img class="characters" src="~@Assets/mc/characters@2x.png"/>
        </div>
      </div>
    </section>
    <section class="mc__container-intel col no-gutters">
      <div class="row mc__container-intel__title justify-content-center">
        Win Tomorrow’s Battlefield by Mastering Mobile Now
      </div>
      <div class="row mc__container-intel__content align-items-center">
        <div class="col-12 col-md-6 right-side">
          <img class="illust" src="~@Assets/mc/intel-illust.jpg"/>
        </div>
        <div class="col-12 col-md-5 left-side">
          <div class="title">
            Intel
          </div>
          <div class="description">
            Get monthly marketing magazine on your email inbox or slack team as a PDF. Intel is the only monthly briefing you’ll need to conquer your competition in a marketing world.
          </div>
          <div class="more">
            <router-link to="/intel">See Intel</router-link>
            <img src="~@Assets/mc/arrow.svg"/>
          </div>
        </div>
      </div>
    </section>
    <section class="mc__container-lookout col no-gutters">
      <div class="row mc__container-intel__content align-items-center">
        <div class="col-12 col-md-6 hidden-md-up right-side-lookout">
          <img class="illust" src="~@Assets/mc/lookout-illust.jpg"/>
        </div>
        <div class="col-12 col-md-6 left-side-lookout">
          <div class="row">
            <div class="col-12 col-md-9 offset-md-3 offset-0">
              <div class="title">
                Lookout
              </div>
              <div class="description">
                Test and preview your links to drive more traffic, trust, and conversions to your website, product pages, and landing pages. Lookout maximizes your website visibility across social and messaging platforms.
              </div>
              <div class="more">
                <router-link to="/lookout">See Lookout</router-link>
                <img src="~@Assets/mc/arrow.svg"/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 hidden-xs-down right-side-lookout">
          <img class="illust" src="~@Assets/mc/lookout-illust.jpg"/>
        </div>
      </div>
    </section>
    <section class="mc__container-join-us">
      <div class="container">
        <div class="row waiting justify-content-center">
          What are you waiting for?
        </div>
        <div class="row victory justify-content-center">
          Lead Your Marketing Team To Victory
        </div>
        <div class="row justify-content-center">
          <button>
            Join us
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { HEADER_EV, CHANGE_PAGE } from '../../events/HeaderEvent';

export default {
  name: 'mc-comp',
  mounted() {
    this.changeBGHeader();
  },
  methods: {
    changeBGHeader() {
      HEADER_EV.emit(CHANGE_PAGE, 'mc-page');
    },
  },
};
</script>
