<template>
  <div>
    <ul v-for="item in $store.state.shopCart">
      <li>{{item}}</li>
    </ul>
    <detail-nav
      @itemClick="itemClick"
      ref="detailNav"

    ></detail-nav>

    <scroll class="content"
            ref="ScrollVue"
            @scrollPosition="scrollPosition"
            :probeType="3">
      <feature-view ref="one" class="one"></feature-view>
      <feature-view ref="two" class="two"></feature-view>
      <feature-view ref="three" class="three"></feature-view>
      <feature-view ref="four" class="four"></feature-view>

    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top class="back-top" @click.native="backToTop" v-show="isShow"></back-top>

  </div>


</template>

<script>
  import DetailNav from "./chilrenCom/DetailNav";
  import Scroll from "../../components/common/scroll/Scroll";
  import FeatureView from "../home/childComps/FeatureView";
  import DetailBottomBar from "./chilrenCom/DetailBottomBar";
  import {backTop} from "../../components/common/util/minxin";

  export default {
    name: "Detail",
    components: {
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
        currentIndex:0
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
          if(this.currentIndex != i &&(positionY >= this.detailTopY[i] && positionY < this.detailTopY[i+1])){
            this.currentIndex = i;
            // console.log(this.currentIndex);
            this.$refs.detailNav.currentIndex = this.currentIndex;
          }
        }

        // 2.判断是否回到顶部
        this.isShow = positionY> 400;
      },


      //加入购物车
      addToCart(){
        console.log('addcart');
        const product ={};
        product.id = 101;
        product.name = '大衣'
        this.$store.commit('addCart',product)
      }
    },

    created() {
      console.log('gettailtop');
      //比如这里有一堆请求 请求完渲染才执行下面的添加

    },
    mounted() {

      // this.$nextTick() 此函数为mounted中上方请求全部执行完再执行
      // 每次执行先设置为空
      this.detailTopY = []

      this.detailTopY.push(0)
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

  .one {
    height: 600px;
  }

  .two {
    height: 600px;
  }

  .three {
    height: 600px;
  }

  .four {
    height: 600px;
  }
</style>
