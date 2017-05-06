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
      <div class="row intel__container-intel__marketing align-items-center">
        <div class="col-12 col-md-6">
          <img class="illust" src="~@Assets/mc/intel-illust.jpg"/>
        </div>
        <div class="col-12 col-md-4">
          <div class="title">
            Marketing warfare, made easy
          </div>
          <div class="description">
            Stop wasting time testing things out on mobile and instead start winning time after time after time. Thanks to bloody brilliant mobile marketing strategies straight from the war rooms of today’s most successful handheld entrepreneurs, your team can stay ahead of the trends, start implementing effective strategies to your team and existing product. Plus, skip the blogger bullshit that wastes your time.
          </div>
        </div>
        <div class="col-12 text-center leaked">
          <p class="title">Leaked: Upcoming Interviews and Espionage Missions</p>
        </div>
        <div class="col-12 logo">
          <img src="~@Assets/intel/facebook-logo.png" class="facebook-logo"/>
          <img src="~@Assets/intel/wechat-3.png" class="wechat-3"/>
          <img src="~@Assets/intel/1280-px-sound-cloud-logo.png" class="soundCloud_logo"/>
          <img src="~@Assets/intel/hootsuite-logo.png" class="hootsuite_logo"/>
          <img src="~@Assets/intel/unbounce-primary-logo-light-background.png" class="unbounce-logo" />
        </div>
      </div>
    </section>
    <section class="intel__container-report">
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="title text-center">The Latest Monthly Intel Reports</p>
        </div>
      </div>
      <div class="row banner align-items-center">
        <div class="col-sm-4">
          <div class="banner-item">
            <div class="figure">
              <img src="~@Assets/intel/magz.png" />
            </div>
            <div class="content">
              <h3>The Rise Of China</h3>
              <p class="date text-uppercase">Janunary  2017 - Classified Briefing</p>
              <p class="desc">China Country Feature: Top 10 Mobile Apps With Marketing Audits  + Actionable Twitter  Strategy for Positive Re-Activation</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="banner-item">
            <div class="figure">
              <img class="opacity" src="~@Assets/intel/magz.svg" />
            </div>
            <div class="content">
              <h3>The Rise Of China</h3>
              <p class="date text-uppercase">Janunary  2017 - Classified Briefing</p>
              <p class="desc">China Country Feature: Top 10 Mobile Apps With Marketing Audits  + Actionable Twitter  Strategy for Positive Re-Activation</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="banner-item">
            <div class="figure">
              <img class="opacity" src="~@Assets/intel/magz.svg" />
            </div>
            <div class="content">
              <h3>The Rise Of China</h3>
              <p class="date text-uppercase">Janunary  2017 - Classified Briefing</p>
              <p class="desc">China Country Feature: Top 10 Mobile Apps With Marketing Audits  + Actionable Twitter  Strategy for Positive Re-Activation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mc__container-join-us">
      <div class="row justify-content-center text-center">
        <div class="col-12">
          <p class="line-1 waiting">Let’s Go!</p>
          <p class="line-2 victory">Challenge the field. Change the industry. Join us today</p>
          <p> <button> read now</button></p>
        </div>
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
      HEADER_EV.emit(MC_PAGE, true);
    },
  },
};
</script>
