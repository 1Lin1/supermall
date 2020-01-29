<template>
  <div id="app">
<!--    保证只创建一次 不销毁-->
   <keep-alive exclude="Detail">
     <router-view></router-view>
   </keep-alive>
   <main-tab-bar class="maintab"></main-tab-bar>
  </div>
</template>

<script>


import MainTabBar from "./components/content/mainTabbar/MainTabBar";
export default {
  name: 'app',
  components: {
    MainTabBar,
  }
}
</script>

<style>
  @import "./assets/css/base.css";
  .maintab{
    z-index: 100000;
  }
</style>
