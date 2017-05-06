<template>
  <div class="intel">
    <section class="intel__container-header">
      <div class="row justify-content-center">
        <div class="col-12 content text-center">
          <p class="title">Special Intel for a Marketing World</p>
          <p class="sub-title">A monthly marketing magazine delivered to your inbox or slack team. Your only hope for success in the mobile future.</p>
          <p><button>read now</button></p>
        </div>
      </div>
    </section>
    <section class="intel__container-handheld">
      <div class="row intel__container-intel__title justify-content-center">
        <div class="col-12 content">
          <p class="title text-center">Handheld Heroics for Mobile Strategists</p>
          <div class="row item align-items-center">
            <div class="col-sm-4">
              <div class="row align-items-start">
                <div class="col-3 col-md-12">
                  <p class="icon"><img src="~@Assets/intel/icon-1.svg" /></p>
                </div>
                <div class="col-9 col-md-12">
                  <p class="item-name">Case Studies</p>
                  <p class="item-desc">Bloody brilliant strategies from the best in the field.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="row align-items-start">
                <div class="col-3 col-md-12">
                  <p class="icon"><img src="~@Assets/intel/icon-2.svg" /></p>
                </div>
                <div class="col-9 col-md-12">
                  <p class="item-name">Interviews</p>
                  <p class="item-desc">Espionage from the frontlines: What’s working? What isn’t?</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="row align-items-start">
                <div class="col-3 col-md-12">
                  <p class="icon"><img src="~@Assets/intel/newspaper.svg" /></p>
                </div>
                <div class="col-9 col-md-12">
                  <p class="item-name">News</p>
                  <p class="item-desc">Top secret plans: Learn about the latest technology & software</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mc__container-intel__content align-items-center">
        <div class="col col-md-6">
          <img class="illust" src="~@Assets/mc/intel-illust.jpg"/>
        </div>
        <div class="col col-md-4">
          <div class="title">
            Intel
          </div>
          <div class="description">
            Get monthly marketing magazine on your email inbox or slack team as a PDF. Intel is the only monthly briefing you’ll need to conquer your competition in a marketing world.
          </div>
          <div class="more">
            See INTEL
            <img src="~@Assets/mc/arrow.svg"/>
          </div>
        </div>
      </div>
    </section>
    <section class="mc__container-lookout">
      <div class="row mc__container-intel__content align-items-center">
        <div class="col col-md-2">
        </div>
        <div class="col col-md-4">
          <div class="title">
            Lookout
          </div>
          <div class="description">
            Test and preview your links to drive more traffic, trust, and conversions to your website, product pages, and landing pages. Lookout maximizes your website visibility across social and messaging platforms.
          </div>
          <div class="more">
            <router-link to="/">See Lookout</router-link>
            <img src="~@Assets/mc/arrow.svg"/>
          </div>
        </div>
        <div class="col col-md-6">
          <img class="illust" src="~@Assets/mc/lookout-illust.jpg"/>
        </div>
      </div>
    </section>
    <section class="mc__container-join-us">
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
    </section>
  </div>
</template>

<script>
import { HEADER_EV, MC_PAGE } from '../../events/HeaderEvent';

export default {
  name: 'mc-comp',
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
