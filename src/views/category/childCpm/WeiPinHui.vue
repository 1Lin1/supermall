<template>
  <div class="weipinhui">
    <category-right>
      <zou-ma-d
        class="zou-ma-d"
        slot="top"
        :top-image-data="topImageData"
      ></zou-ma-d>

      <cate-good-list slot="center" >
        <span  class="recommend-left">手机推荐</span>
        <span class="recommend-right">
        <svg class="icon icon-paihang" aria-hidden="true">
             <use xlink:href="#icon-paihang"></use>
        </svg>
            排行榜
        </span>

        <cate-good-list-item v-for="item in phoneData">
          <a :href="item.link"slot="img">
            <img :src="item.image" alt="" >
          </a>
          <span slot="text">{{item.name}}</span>
        </cate-good-list-item>


      </cate-good-list>


      <cate-good-list slot="bottom" >
        <span class="recommend-left">电脑推荐</span>
        <span class="recommend-right">
        <svg class="icon icon-paihang" aria-hidden="true">
             <use xlink:href="#icon-paihang"></use>
        </svg>
            排行榜
        </span>

        <cate-good-list-item v-for="item in computerData">
          <a :href="item.link"slot="img">
            <img :src="item.image" alt="" >
          </a>
          <span slot="text">{{item.name}}</span>
        </cate-good-list-item>


      </cate-good-list>



    </category-right>

  </div>
</template>

<script>
  import CategoryRight from "../../../components/common/categoryRight/CategoryRight";
  import ZouMaD from "../../../components/common/categoryRight/ZouMaD";
  import CateGoodList from "./categoryList/CateGoodList";
  import CateGoodListItem from "./categoryList/CateGoodListItem";
  import {getTopImage} from "../../../network/weipinhui";

  export default {
    name: "WeiPinHui",
    components: {CateGoodListItem, CateGoodList, ZouMaD, CategoryRight},
    data(){
      return{
        phoneData:[],
        computerData:[],
        topImageData:[],

      }
    },
    methods:{
      getTopImage(){
        getTopImage('weipinhui').then(res =>{
          this.phoneData = res[0].phone;
          this.topImageData = res[0].topImage;
        })
      },
      getComputerData(){
        getTopImage('weipinhui').then(res =>{
          this.computerData = res[0].computer;
        })
      },


    },
    created() {
      this.getTopImage();
      this.getComputerData();
    }
  }
</script>

<style scoped>




</style>
