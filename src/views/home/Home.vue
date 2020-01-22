<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','精选','潮流']"></tab-control>
    <goods-list class="good-list" :goods="goods['pop'].list"></goods-list>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>



    </ul>

  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";

  import FeatureView from "./childComps/FeatureView";
  import TabControl from "../../components/content/tabControl/TabControl";

  import {
    getHomeMultidata,
    getHomeGoods,
  } from "../../network/home";


  import GoodsList from "../../components/content/goods/GoodsList";
  import image1 from "./1.png"
  // 导入轮播图组件 默认导入index.js  里面写了导出两个组件 一次性引入

  // 返回的是一个promise对象 所以直接用then就行

  export default {
    name: "Home",
    components: {
      GoodsList,
      TabControl,
      FeatureView,
      HomeRecommend,
      NavBar,
      HomeSwiper,

    },
    data(){
      return{
        banners:[],
        // dKeywords:[],
        // keywords:[],
        recommends:[],
        goods:{
          'pop':{page: 0, list: [image1,image1,image1,image1,image1,image1,image1,image1,]},
          'new':{page: 0, list: []},
          'sell':{page: 0, list: []},
        },
      }
    },
    created() {
      getHomeMultidata().then(res =>{
        console.log(res.data);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // this.dKeywords = res.data.dKeyword;
        // this.keywords = res.data.keywords;
      })

      getHomeGoods('pop',1).then(res =>{

      })
    }
  }
</script>

<style scoped>
   #home{
    padding-top: 44px;
   }
  .home-nav{
    background-color: var(--color-tint);
    color:white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }


</style>
