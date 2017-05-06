<template>
  <div class="header" v-bind:class="{ 'mc-page': isMcPage}">
    <div class="container">
      <el-menu mode="horizontal" class="header__menu row align-items-center">
        <div class="logo col-6 col-md-3" index="1">
          <router-link to="/"><img src="../../assets/logo-black.png"/></router-link>
        </div>
        <div class="look-out col-4"index="2">Lookout</div>
        <div class="hidden-md-up menu-hambuger col-2"><img src="../../assets/burger-menu.svg"></div>
        <div class="hidden-sm-down col-5 row justify-content-end">
          <el-submenu index="3">
            <template slot="title">Products</template>
            <el-menu-item index="3-1">item one</el-menu-item>
            <el-menu-item index="3-2">item two</el-menu-item>
            <el-menu-item index="3-3">item three</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">About</el-menu-item>
          <el-menu-item index="4">Hire us</el-menu-item>
          <el-menu-item index="4" class="contact-us">Contact us</el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { HEADER_EV, MC_PAGE } from '../../events/HeaderEvent';

export default {
  name: 'header-comp',
  data() {
    return {
      isMcPage: null,
    };
  },
  created() {
    HEADER_EV.on(MC_PAGE, (flag) => {
      this.isMcPage = flag;
    });
  },
};
</script>
