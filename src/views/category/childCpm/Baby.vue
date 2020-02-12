<template>
  <div class="baby">
    <category-right>
      <div slot="top">
        <img :src="topImage" alt="" style="width: 100%;height: 100%">
      </div>
      <cate-good-list slot="center">
        <cate-good-list-item v-for="item in centerImage">
          <a :href="item.link"slot="img">
            <img :src="item.image" alt="" >
          </a>
          <span slot="text">{{item.name}}</span>
        </cate-good-list-item>
      </cate-good-list>
      <cate-good-list slot="bottom">
        <cate-good-list-item v-for="item in centerImage">
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
    name: "Baby",
    components: {CateGoodListItem, CateGoodList, CategoryRight},
    data(){
      return{
        topImage:'',
        centerImage:[]
      }
    },
    methods:{
      getTopImage(){
        getTopImage('baby').then(res => {
          console.log(res);
          this.topImage = res[0].topImage;
          this.centerImage = res[0].centerImage;
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
