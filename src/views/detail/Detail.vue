<template>
  <div>
    <detail-nav @itemClick="itemClick"></detail-nav>

    <scroll class="content" ref="scroll">
      <feature-view ref="one" class="one"></feature-view>
      <feature-view ref="two" class="two"></feature-view>
      <feature-view ref="three" class="three"></feature-view>
      <feature-view ref="four" class="four"></feature-view>
    </scroll>
  </div>


</template>

<script>
  import DetailNav from "./chilrenCom/DetailNav";
  import Scroll from "../../components/common/scroll/Scroll";
  import FeatureView from "../home/childComps/FeatureView";


  export default {
    name: "Detail",
    components: {
      FeatureView,
      Scroll,
      DetailNav,


    },
    data(){
      return{
        detailTopY:[]
      }
    },
    methods:{
      itemClick(index){
            this.$refs.scroll.scrollTo(0,-this.detailTopY[index],100)
      },



    },

    created() {
      console.log('gettailtop');
      //比如这里有一堆请求 请求完渲染才执行下面的添加

    },
    mounted() {

      // this.$nextTick() 此函数为mounted中上方请求全部执行完再执行
      // 每次执行先设置为空
      this.detailTopY = []
      this.detailTopY.push(this.$refs.two.$el.offsetTop)
      this.detailTopY.push(this.$refs.three.$el.offsetTop)
      this.detailTopY.push(this.$refs.four.$el.offsetTop)
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
    height: 400px;
  }

  .two {
    height: 400px;
  }

  .three {
    height: 400px;
  }

  .four {
    height: 400px;
  }
</style>
