<template>
  <div class="nvzhuang">
    <category-right>
      <div slot="top">
        <img :src="topImage" alt="" style="width: 100%;height: 100%">
      </div>

      <cate-good-list slot="center">
        <span  class="recommend-left">女装推荐</span>
        <span class="recommend-right">
        <svg class="icon icon-paihang" aria-hidden="true">
             <use xlink:href="#icon-paihang"></use>
        </svg>
            排行榜
        </span>
        <cate-good-list-item v-for="item in centerCloses">
          <a :href="item.link"slot="img">
            <img :src="item.image" alt="" >
          </a>
          <span slot="text">{{item.name}}</span>
        </cate-good-list-item>
      </cate-good-list>

      <cate-good-list slot="bottom">
        <span  class="recommend-left">女装推荐</span>
        <span class="recommend-right">
        <svg class="icon icon-paihang" aria-hidden="true">
             <use xlink:href="#icon-paihang"></use>
        </svg>
            排行榜
        </span>
        <cate-good-list-item v-for="item in centerCloses">
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
  import {getTopImage} from "../../../network/weipinhui";
  import CategoryRight from "../../../components/common/categoryRight/CategoryRight";
  import CateGoodList from "./categoryList/CateGoodList";
  import CateGoodListItem from "./categoryList/CateGoodListItem";

  export default {
    name: "NvZhuang",
    components: {
      CateGoodListItem,
      CateGoodList,
      CategoryRight,

    },
    data(){
      return{
        topImage:'',
        centerCloses:[]
      }
    },
    methods:{
      getTopImage(){
        getTopImage('nvzhuang').then(res => {
          this.topImage = res[0].topImage;
          this.centerCloses = res[0].centerCloses;
        })
      }
    },
    created() {
      this.getTopImage();
    }
  }
</script>

<style scoped>

</style>
