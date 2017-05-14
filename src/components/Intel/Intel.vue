<template>
  <div class="intel">
    <section class="intel__container-header">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 content text-center">
            <p class="title">Special Intel for a Marketing World</p>
            <p class="sub-title">A monthly marketing magazine delivered to your inbox or slack team. Your only hope for success in the mobile future.</p>
            <p><router-link to="/intel-report"><button>read now</button></router-link></p>
          </div>
        </div>
      </div>
    </section>
    <section class="intel__container-handheld">
      <div class="row intel__container-intel__title justify-content-center">
        <div class="col-12 content">
          <p class="title text-center">Handheld Heroics for Mobile Strategists</p>
          <div class="row item align-items-center col-12 col-md-10">
            <div class="col-12 col-md-4">
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
            <div class="col-12 col-md-4">
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
            <div class="col-12 col-md-4">
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
        <div class="col-12 col-md-6">
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
        <div class="logo row justify-content-center align-items-center">
          <img src="~@Assets/intel/intel-fb.png" class="col-4 col-md-2 fb"/>
          <img src="~@Assets/intel/intel-wechat.png" class="col-4 col-md-2 we"/>
          <img src="~@Assets/intel/intel-soundcloud.png" class="col-4 col-md-2 soundcloud"/>
          <img src="~@Assets/intel/intel-hootsuite.png" class="col-4 col-md-2 hootsuite"/>
          <img src="~@Assets/intel/intel-unbouncel.png"class="col-4 col-md-2 unbounce"/>
        </div>
      </div>
    </section>
    <section class="intel__container-report">
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="title text-center">The Latest Monthly Intel Reports</p>
        </div>
      </div>
      <div class="row banner align-items-center col-12 col-md-10">
        <div class="col-sm-4" v-for="data in getIntelReports.data">
          <div class="banner-item hover-card">
            <div class="figure">
              <img :src="data.attributes.avatarUrl" width="100%"/>
              <!-- <img src="~@Assets/intel/magz.jpg" width="100%"/> -->
            </div>
            <div class="content">
              <h3>{{data.attributes.title}}</h3>
              <p class="date text-uppercase">{{formatDate(data.attributes.issuedAt)}} - {{data.attributes.status}}</p>
              <p class="desc">{{data.attributes.caption}} + {{data.attributes.description}}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4" v-for="n in 3 - getIntelReports.data.length">
          <div class="banner-item coming-soon">
            <div class="figure">
              <img class="opacity" src="~@Assets/intel/magz.svg" />
            </div>
            <div class="content">
              <div class="text-coming-soon">coming soon</div>
              <div class="rectangle-grey-03"></div>
              <div class="rectangle-grey-03"></div>
              <div class="rectangle-grey-01 lighter"></div>
              <div class="rectangle-grey-00 lighter"></div>
              <div class="rectangle-grey-03"></div>
              <div class="rectangle-grey-02"></div>
              <div class="rectangle-grey-03"></div>
              <div class="rectangle-grey-04"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="intel__container-join-us">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-12">
            <p class="line-1 waiting">Let’s Go!</p>
            <p class="line-2 victory">Challenge the field. Change the industry. Join us today</p>
            <p> <button> read now</button></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
import { HEADER_EV, CHANGE_PAGE } from '../../events/HeaderEvent';

export default {
  name: 'mc-comp',
  mounted() {
    this.changeBGHeader();
    this.$store.dispatch('getIntelResults');
  },
  computed: mapGetters({
    getIntelReports: 'getIntelReports',
  }),
  methods: {
    changeBGHeader() {
      HEADER_EV.emit(CHANGE_PAGE, 'intel');
    },
    formatDate(value) {
      return moment(String(value)).format('MMMM YYYY');
    },
  },
};
</script>
