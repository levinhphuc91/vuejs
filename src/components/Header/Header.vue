<template>
  <div class="header">
    <div class="container">
      <el-menu mode="horizontal" class="header__menu">
        <div class="left-navbar">
          <el-menu-item class="logo" index="1"><img src="../../assets/logo.png" width="250"/></el-menu-item>
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
</template>

<script>
export default {
  name: 'header-comp',
};
</script>

