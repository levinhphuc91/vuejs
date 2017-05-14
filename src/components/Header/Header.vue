<template>
  <div class="header" v-bind:class="page">
    <div class="container">
      <el-menu mode="horizontal" class="header__menu row align-items-center">
        <div class="logo col-6 col-md-3" index="1">
          <router-link to="/"><img src="../../assets/logo-black.png"/></router-link>
        </div>
        <div class="look-out col-4 hidden-md-up" index="2">{{page}}</div>
        <a class="btn hidden-md-up" href="#" data-toggle="modal" data-target="#MobileCalvaryMenu" data-backdrop="false">
          <img src="../../assets/burger-menu.svg">
        </a>
        <div class="hidden-xs-down ml-auto col-5 row justify-content-end">
          <el-submenu index="3">
            <template slot="title">Products</template>
            <el-menu-item index="3-1"><router-link to="/intel">Intel</router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="/lookout">Lookout</router-link></el-menu-item>
          </el-submenu>
          <el-menu-item index="4"><router-link to="/about">About</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="/hire-us">Hire us</router-link></el-menu-item>
          <el-menu-item index="4" class="contact-us"><router-link to="/contact-us">Contact us</router-link></el-menu-item>
        </div>
        <div class="modal hidden-md-up" id="MobileCalvaryMenu" tabindex="-1" role="dialog" aria-labelledby="MobileCalvaryMenu" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <router-link to="/"><img class="logo" src="../../assets/logo-black.png"/></router-link>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true"><img src="../../assets/close.svg"></span>
                </button>
              </div>
              <div class="modal-body">
                <ul class="nav navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link dropdown-toggle text-uppercase" href="#" id="dropdownMenuCities" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Products
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuCities">
                        <router-link class="dropdown-item" to="/intel">Intel</router-link>
                        <router-link class="dropdown-item" to="/lookout">Lookout</router-link>
                    </div>
                  </li>
                  <li class="nav-item text-uppercase"><router-link class="nav-link" to="/about">About</router-link></li>
                  <li class="nav-item text-uppercase"><router-link class="nav-link" to="/hire-us">Hire us</router-link></li>
                  <li class="nav-item text-uppercase"><router-link class="nav-link" to="/contact-us">Contact us</router-link></li>
                </ul>
              </div>
            </div>
          </div>
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
