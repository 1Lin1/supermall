<template>
  <div class="nan-zhuang">
    <category-right>
      <div slot="top">
        <img :src="topImage" alt="" style="width: 100%;height: 100%">
      </div>

      <cate-good-list slot="center">
        <cate-good-list-item v-for="item in centerCloses">
          <a :href="item.link" slot="img">
            <img :src="item.image" alt="" >
          </a>
          <span slot="text">{{item.name}}</span>
        </cate-good-list-item>
      </cate-good-list>

      <cate-good-list slot="bottom">
        <cate-good-list-item v-for="item in centerCloses">
          <a :href="item.link" slot="img">
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
  import {getTopImage} from "../../../network/weipinhui";
  import CateGoodList from "./categoryList/CateGoodList";
  import CateGoodListItem from "./categoryList/CateGoodListItem";

  export default {
    name: "NanZhuang",
    components: {CateGoodListItem, CateGoodList, CategoryRight},
    data(){
      return{
        topImage:'',
        centerCloses:[]
      }
    },
    methods:{
      getTopImage(){
        getTopImage('nanzhuang').then(res =>{
          console.log(res);
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
