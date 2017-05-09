<template>
  <div class="header" v-bind:class="page">
    <div class="container">
      <el-menu mode="horizontal" class="header__menu row align-items-center">
        <div class="logo col-6 col-md-3" index="1">
          <router-link to="/"><img src="../../assets/logo-black.png"/></router-link>
        </div>
        <div class="look-out col-4"index="2">{{page}}</div>
        <div class="hidden-md-up menu-hambuger col-2"><img src="../../assets/burger-menu.svg"></div>
        <div class="hidden-sm-down col-5 row justify-content-end">
          <el-submenu index="3">
            <template slot="title">Products</template>
            <el-menu-item index="3-1"><router-link to="/intel">Intel</router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="/lookout">Lookout</router-link></el-menu-item>
          </el-submenu>
          <el-menu-item index="4">About</el-menu-item>
          <el-menu-item index="4"><router-link to="/hire-us">Hire us</router-link></el-menu-item>
          <el-menu-item index="4" class="contact-us"><router-link to="/contact-us">Contact us</router-link></el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { HEADER_EV, CHANGE_PAGE } from '../../events/HeaderEvent';

export default {
  name: 'header-comp',
  data() {
    return {
      page: null,
    };
  },
  created() {
    HEADER_EV.on(CHANGE_PAGE, (page) => {
      this.page = page;
    });
  },
};
</script>
