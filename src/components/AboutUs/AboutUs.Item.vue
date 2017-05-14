<template>
  <div class="about-us__item">
    <div class="about-us__item__person row justify-content-center hidden-sm-down">
      <div class="col-2">
        <img :src="imgLogo('lady')" v-on:click="selectProfile('0')"/>
      </div>
      <div class="col-2">
        <img :src="imgLogo('leader')" v-on:click="selectProfile('1')"/>
      </div>
      <div class="col-2">
        <img :src="imgLogo('hacker')" v-on:click="selectProfile('2')"/>
      </div>
      <div class="col-2">
        <img :src="imgLogo('lala')" v-on:click="selectProfile('3')"/>
      </div>
      <div class="col-2">
        <img :src="imgLogo('sumo')" v-on:click="selectProfile('4')"/>
      </div>
    </div>
    <div class="about-us__item__info row">
      <div class="col-12 col-md-6 about-us__item__info__profile" :class="this.item.name.toLowerCase()">
        <img :src="imgProfile()">
      </div>
      <div class="col-12 about-us__item__person row justify-content-around hidden-md-up">
        <div class="col-2">
          <img :src="imgLogo('lady')" v-on:click="selectProfile('0')"/>
        </div>
        <div class="col-2">
          <img :src="imgLogo('leader')" v-on:click="selectProfile('1')"/>
        </div>
        <div class="col-2">
          <img :src="imgLogo('hacker')" v-on:click="selectProfile('2')"/>
        </div>
        <div class="col-2">
          <img :src="imgLogo('lala')" v-on:click="selectProfile('3')"/>
        </div>
        <div class="col-2">
          <img :src="imgLogo('sumo')" v-on:click="selectProfile('4')"/>
        </div>
      </div>
      <div class="col-12 col-md-6 about-us__item__info__content">
        <p class="about-us__item__info__title">{{ item.name }}</p>
        <p class="about-us__item__info__subTitle">
          <span>a.k.a</span>{{ item.aka }}
        </p>
        <div class="about-us__item__info__social">
          <img src="../../assets/about/twitter.svg">
          <img src="../../assets/about/instagram.svg">
        </div>
        <div class="about-us__item__info__content row justify-content-between no-gutters">
          <p class="desc1">{{ item.desc1 }}</p>
          <p class="desc2">{{ item.desc2 }}</p>
          <div class="previous">
            <img src="../../assets/about/previous-icon.svg">
            Previous
          </div>
          <div class="next">
            Next
            <img src="../../assets/about/next-icon.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { INTEL_EV, CHANGE_PROFILE } from '../../events/IntelEvent';

const req = require.context('../../assets/about', true, /^\.\/.*\.png$/);
export default {
  name: 'about-us-item',
  props: ['item'],
  methods: {
    imgLogo(name) {
      let className = '';
      if (name.indexOf(this.item.name.toLowerCase()) > -1) {
        className = `${name}-active`;
      } else {
        className = `${name}-inactive`;
      }
      return req(`./${className}.png`);
    },
    imgProfile() {
      return req(`./${this.item.name.toLowerCase()}-profile.png`);
    },
    selectProfile(index) {
      INTEL_EV.emit(CHANGE_PROFILE, index);
    },
  },
};
</script>
