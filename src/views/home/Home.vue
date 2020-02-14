<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>


<!--    //用于向上拉时显示  附着在标题下-->
    <tab-control
      class="tab-control"
      :titles="['流行','精选','潮流']"
      @tabClick="tabClick"
      ref="tabcontrol2"
      v-show="isTabFixed"
    ></tab-control>

    <scroll class="content"
            ref="ScrollVue"
            :pro-be-Type="2"
            @scrollPosition="scrollPosition"
            :pull-up-load="true"
            @pullingUpload="pullingUpload"
    >
<!--      <home-swiper :banners="banners" @swipperImageLoad="swipperImageLoad"></home-swiper>-->
      <home-lun-bo :banners="banners"  @swipperImageLoad="swipperImageLoad"></home-lun-bo>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行','精选','潮流']"
        @tabClick="tabClick"
        ref="tabcontrol1"
      ></tab-control>
      <goods-list
        class="good-list"
        :goods="showGoods"
      ></goods-list>

    </scroll>

    <back-top class="back-top" @click.native="backToTop" v-show="isShow"></back-top>
  </div>
</template>

<script>

  // 导入防抖函数
  import {debounce,formatDate} from "../../components/common/util/util";

  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";

  import FeatureView from "./childComps/FeatureView";
  import TabControl from "../../components/content/tabControl/TabControl";

  import {
    getHomeMultidata,
    getHomeGoods,
    getMySqlData,
  } from "../../network/home";


  import GoodsList from "../../components/content/goods/GoodsList";

  import image3 from "./tian/3.jpg"
  import image2 from "./tian/2.jpg"
  import image5 from "./tian/5.jpg"
  import image8 from "./tian/8.jpg"

  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backtop/BackTop";
  import HomeLunBo from "./childComps/HomeLunBo";
  // 导入轮播图组件 默认导入index.js  里面写了导出两个组件 一次性引入

  // 返回的是一个promise对象 所以直接用then就行

  export default {
    name: "Home",
    components: {
      HomeLunBo,
      BackTop,
      Scroll,
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
          'pop':{page: 0, list: []},
          'new':{page: 0, list: []},
          'sell':{page: 0, list: []},
        },

        currentType:'pop',
        isShow:false,
        tabControlOffset:0,
        isTabFixed:false,
        saveY:0,

      }
    },
    created() {
      let date = new Date(1535694719*1000)
      // console.log(formatDate(date, 'yyyy/MM/dd'));


      this.getHomeMultidata();

      // 三个都动态的请求
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

      // this.getMySqlData();


    },

    mounted() {
      // 监听加载图片 加载完刷新
      const refresh = debounce(this.$refs.ScrollVue.refresh,1000)
      this.$bus.$on('itemImageLoad',() =>{
        refresh()
      })


    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list;
      }
    },

    activated() {

      console.log('用户登录状态' + this.$store.state.isUserLoad);

      // 回到上次停留地方 同时刷新
      this.$refs.ScrollVue.scrollTo(0,this.saveY,0)
      this.$refs.ScrollVue.refresh()
    },

    // beforeRouteLeave(){
    //   this.path = this.$route.path;
    // }


    deactivated() {
      this.saveY = this.$refs.ScrollVue.scroll.y
    },
    methods:{
      /***
       * 事件监听的办法
       */

      swipperImageLoad(){
        this.tabControlOffset = 514;
        // this.tabControlOffset = this.$refs.tabcontrol1.$el.offsetTop;
        // console.log(this.$refs.tabcontrol1.$el.offsetTop);
      },
      // 多个请求在一定时间内 集合成少个请求发送
      //防抖 分流


      pullingUpload(){
        console.log('上拉加载中');
        this.getHomeGoods(this.currentType)
      },
      scrollPosition(position){
        // 当滚动到一定位置 向上图标进行展示
        this.isShow = (-position.y) > 270;

        this.isTabFixed = (-position.y) > this.tabControlOffset
      },
      // 返回最上方
      backToTop(){
        // 运用ref取到scroll组件调用里面的方法 内部封装
        this.$refs.ScrollVue.scrollTo(0,0,500)
        this.$toast.show('恬恬可爱极了~',3000)
      },
      // 点击事务事件
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.tabcontrol1.currentIndex = index
        this.$refs.tabcontrol2.currentIndex = index
      },



      // 网络事件
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          this.banners = res[0].data.banner.list;
          this.recommends =res[0].data.recommend.list;
          // this.dKeywords = res.data.dKeyword;
          // this.keywords = res.data.keywords;
        })
      },
      getHomeGoods(type){

        getHomeGoods(type).then(res =>{
          // console.log(res);
          for (let i = 0; i < res.length; i++) {
            this.goods[type].list.push(res[i])
          }
        })
        // 测试本地照片
        //
        // const images = [image8,image8,image8,image8,];
        // this.goods[type].list.push(...images);
        // 当前的页数+1
        // const page = this.goods[type].page + 1 ;
        // getHomeGoods(type,page).then(res =>{
        //   console.log(res);
        //
        //   // 加载的数据扔进去 页数加1 数组添加写法
        //   // this.goods[type].list.push(...res);
        //   // this.goods[type].page += 1
        // })
      }
    }
  }
</script>

<style  scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    /*
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 9; */
  }
  .tab-control{
    position: relative;

    left: 0;
    right: 0;
    z-index: 9;
  }
  .content{
    overflow: hidden;
    /*溢出元素框 隐藏*/

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*tab固定*/
  .fixed{
    position: relative;

    left: 0;
    right: 0;
    top: 44px;
    z-index: 9;
  }
</style>

