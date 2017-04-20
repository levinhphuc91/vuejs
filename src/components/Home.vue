<template>
  <div>
    <div class="header">
      <div class="container">
        <el-menu mode="horizontal" class="content">
          <div class="left-navbar">
            <el-menu-item class="logo" index="1"><img src="../assets/logo.png" width="250"/></el-menu-item>
            <el-menu-item class="look-out"index="2">Lookout</el-menu-item>
          </div>
          <div class="right-navbar">
            <el-submenu index="3">
              <template slot="title">Products</template>
              <el-menu-item index="3-1">item one</el-menu-item>
              <el-menu-item index="3-2">item two</el-menu-item>
              <el-menu-item index="3-3">item three</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">About</el-menu-item>
            <el-menu-item index="4">Hire us</el-menu-item>
            <el-menu-item index="4">Contact us</el-menu-item>
          </div>
        </el-menu>
      </div>
    </div>
    <div class="home container">
      <h1 class="main-title">Test and Optimize Your Links Across Your Favorite Social and Messaging Platforms</h1>
      <div class="search-engine">
        <div class="input-url">
          <input value="http://mybusiness.com/home-page/">
          <button class="text">Test</button>
        </div>
      </div>
      <div class="learn-more">
        Learn how to optimize links across web, mobile, and messaging platforms. <a>Read now.</a>
      </div>
      <div class="benefits">
        <div class="traffic">
          <img src="../assets/chart.png" height="50"/>
          <span>Drive more traffic and more conversions</span>
        </div>
        <div class="user-experience">
          <img src="../assets/heart.png" height="50"/>
          <span>Build trust and deliver  a better User Experience</span>
        </div>
        <div class="time">
          <img src="../assets/time.png" height="50"/>
          <span>Safe time. Test all platforms from 1 free dashboard</span>
        </div>
      </div>
      <div class="platforms">
        Safe time. Test all platforms from 1 free dashboard
      </div>
    </div>
    <div class="footer">
      <div class="content">
        <div class="mobile-cavalry column">
          <a class="header-column">Mobile cavalry</a>
          <a>Join</a>
          <a>Login</a>
          <a>Pricing</a>
          <a>Hire us</a>
        </div>
        <div class="product column">
          <a class="header-column">Product</a>
          <a>Lookout</a>
          <a>Intelligence</a>
        </div>
        <div class="about column">
          <a class="header-column">About</a>
          <a>About us</a>
          <a>Jobs</a>
          <a>Terms</a>
          <a>Privacy</a>
        </div>
        <div class="contact column">
          <a class="header-column">Contact</a>
          <a>Contact us</a>
          <a>Submit intel</a>
          <a>Feedback</a>
        </div>
      </div>
      <div class="copy-right">
        Shipped by the fine folk at <span>Viral Foundry</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "./home.scss"
</style>
