<template>
  <div>
    <detail-nav
      @itemClick="itemClick"
      ref="detailNav"

    ></detail-nav>

    <scroll class="content"
            ref="ScrollVue"
            @scrollPosition="scrollPosition"
            :probeType="3">
      <detail-swipper :topImage="topImage" ref="one" @DetailSwiperLoad="DetailSwiperLoad"></detail-swipper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-sale-man :sale-man="saleMan"></detail-sale-man>
      <detail-show-model :modelImage="modelImage"></detail-show-model>
      <detail-number></detail-number>
      <feature-view ref="two" class="two"></feature-view>
      <feature-view ref="three" class="three"></feature-view>
      <feature-view ref="four" class="four"></feature-view>

    </scroll>

    <detail-bottom-bar @addToCart="addToCart" ></detail-bottom-bar>
    <back-top class="back-top" @click.native="backToTop" v-show="isShow"></back-top>

  </div>


</template>

<script>
  import DetailNav from "./chilrenCom/DetailNav";
  import Scroll from "../../components/common/scroll/Scroll";
  import FeatureView from "../home/childComps/FeatureView";
  import DetailBottomBar from "./chilrenCom/DetailBottomBar";
  import {backTop} from "../../components/common/util/minxin";
  import {getDetailData,Goods} from "../../network/details";
  import DetailSwipper from "./chilrenCom/DetailSwipper";
  import DetailBaseInfo from "./chilrenCom/DetailBaseInfo";
  import DetailSaleMan from "./chilrenCom/DetailSaleMan";
  import DetailShowModel from "./chilrenCom/DetailShowModel";
  import DetailNumber from "./chilrenCom/DetailNumber";

  export default {
    name: "Detail",
    components: {
      DetailNumber,
      DetailShowModel,
      DetailSaleMan,
      DetailBaseInfo,
      DetailSwipper,
      DetailBottomBar,
      FeatureView,
      Scroll,
      DetailNav,


    },
    // 混入其中
    mixins:[backTop],
    data(){
      return{
        detailTopY:[],
        currentIndex:0,
        topImage:[],
        goods:{},
        saleMan:{},
        modelImage:[],
      }
    },
    methods:{
      itemClick(index){
            this.$refs.ScrollVue.scrollTo(0,-this.detailTopY[index],200)
      },
      scrollPosition(position){
        // console.log(position);
        // 进行条件判断
        const  positionY = -position.y;
        for (let i = 0; i < this.detailTopY.length - 1; i++) {
          // 第一个判断条件是让她只执行一遍
          if(this.currentIndex != i &&(positionY >= this.detailTopY[i] && positionY < this.detailTopY[i+1])){
            this.currentIndex = i;
            // console.log(this.currentIndex);
            this.$refs.detailNav.currentIndex = this.currentIndex;
          }
        }

        // 2.判断是否回到顶部
        this.isShow = positionY> 400;
      },

      //检测顶部图片加载是否完毕
      DetailSwiperLoad(){
        console.log('图片加载完毕');
      },


      //加入购物车
      addToCart(){
        const product = {id:101,name:'大衣',price:1000};

        this.$store.dispatch('addCart',product).then(res =>{
          console.log(res);
          this.$toast.show(res,3000)
        })
        //测试添加裤子

      },

    },

    created() {
      let pid = this.$route.query.pid
      getDetailData(pid).then(res =>{
        //尝试封装类思想 面向对象开发
        const data = res[0];
        this.topImage = data.topImage;
        this.goods = new Goods(data);

        this.saleMan = this.goods;
        this.modelImage = data.centerImage;

      })
      //比如这里有一堆请求 请求完渲染才执行下面的添加

    },
    mounted() {

      // this.$nextTick() 此函数为mounted中上方请求全部执行完再执行
      // 每次执行先设置为空
      this.detailTopY = []
      //
      this.detailTopY.push(this.$refs.one.$el.offsetTop)
      this.detailTopY.push(this.$refs.two.$el.offsetTop)
      this.detailTopY.push(this.$refs.three.$el.offsetTop)
      this.detailTopY.push(this.$refs.four.$el.offsetTop)
      // 添加一个js最大的值 进行比较 节省判断条件
      this.detailTopY.push(Number.MAX_VALUE)
      console.log(this.detailTopY);

    }
  }
</script>

<style scoped>
  .content{
    overflow: hidden;
    /*溢出元素框 隐藏*/

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .two {
    margin-top: 600px;
    height: 600px;
  }

  .three {
    height: 600px;
  }

  .four {
    height: 600px;
  }
</style>
