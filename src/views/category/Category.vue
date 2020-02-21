<template>
  <div class="wrapper">
    <nav-bar class="nav-bar"><div slot="center">分类</div></nav-bar>
<!--    <tab-menu :categories="categories"></tab-menu>-->

    <div class="category">
      <tab-menu :categories="categories"
                @menuItemClick="menuItemClick"
                ref="tabmenu"
      />

      <scroll class="content-right">
        <keep-alive>
          <router-view/>
        </keep-alive>
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
          {name:'唯品会',path:'/category/weipinhui'},
          {name:'男装',path:'/category/nanzhuang'},
          {name:'女装',path:'/category/nvzhuang'},
          {name:'男鞋',path:'/category/nanxie'},

          {name:'女鞋',path:'/category/nvxie'},
          {name:'手机数码',path:'/category/phone'},
          {name:'电脑办公',path:'/category/computer'},
          {name:'家用电器',path:'/category/powerhome'},

          {name:'食品生鲜',path:'/category/food'},
          {name:'酒水饮料',path:'/category/drink'},
          {name:'母婴童装',path:'/category/baby'},
          {name:'医药保障',path:'/category/medicine'},

          {name:'运动户外',path:'/category/sport'},
          {name:'家居厨具',path:'/category/restaurant'},
          {name:'礼品鲜花',path:'/category/flower'},
          {name:'家居建材',path:'/category/jiaju'},


        ],
        path:''
      }
    },
    methods:{
      menuItemClick(path){
        this.path = path
      }
    },
    activated() {
      // 一激活把保存的路由加进去
      this.$router.push(this.path)

    },
    beforeRouteLeave (to, from, next) {
      // 离开时把离开前的路由记录下来
      this.path = this.$route.path;
      next();
    },
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
  }
  .content-right{
    overflow: hidden;

    color: black;
    font-family:"NSimSun";
    font-size: 14px;
    font-weight: bold;
    line-height: 14px;

    position: absolute;
    bottom: 60px;
    top:49px;
    left: 74px;
    right: 0;
  }
</style>
