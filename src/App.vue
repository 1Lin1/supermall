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
  },
  created () {
    // 在页面加载时读取sessionStorage
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },
  provide(){
    return{
      reload:this.reload
    }
  }
}
</script>

<style>
  @import "./assets/css/base.css";
  .maintab{
    z-index: 100000;
  }
</style>
