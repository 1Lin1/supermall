<template>
  <div class="wrapper">
    <nav-bar class="nav-bar"><div slot="center">分类</div></nav-bar>
<!--    <tab-menu :categories="categories"></tab-menu>-->

    <div class="category">
      <tab-menu :categories="categories"
      ></tab-menu>

      <scroll class="content-right">
        <router-view></router-view>
      </scroll>
    </div>

  </div>
</template>

<script>

  import BScroll from 'better-scroll'
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";
  import TabMenu from "./childCpm/TabMenu";
  export default {
    name: "Category",
    components:{
      TabMenu,
      Scroll,
      NavBar

    },
    data(){
      return{
        categories:[
          {name:'唯品会',path:'/weipinhui'},
          {name:'男装',path:'/nanzhuang'},
          {name:'女装',path:'/nvzhuang'},
          {name:'男鞋',path:'/nanxie'},

          {name:'女鞋',path:'/nvxie'},
          {name:'手机数码',path:'/phone'},
          {name:'电脑办公',path:'/computer'},
          {name:'家用电器',path:'/homepower'},

          {name:'食品生鲜',path:'/food'},
          {name:'酒水饮料',path:'/drink'},
          {name:'母婴童装',path:'/baby'},
          {name:'医药保障',path:'/medicine'},

          {name:'运动户外',path:'/sport'},
          {name:'家居厨具',path:'/restaurant'},
          {name:'礼品鲜花',path:'/flower'},
          {name:'宠物生活',path:'/pet'},


        ]
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .wrapper{
    height: 100vh;
    /*background-color: red;*/
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #eeeeee;
    font-size: 25px;
  }
  .content-right{
    overflow: hidden;

    position: absolute;
    bottom: 60px;
    top:54px;
    left: 74px;
    right: 0;
  }
</style>
