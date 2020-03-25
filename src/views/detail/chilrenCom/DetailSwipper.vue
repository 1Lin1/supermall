<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in topImage" :key="index">
        <img :src="item" alt="" @load="ImageLoad">
      </swiper-item>


    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper";

  export default {
    name: "DetailSwipper",
    data(){
      return{
        isLoad:false,
      }
    },
    inject: ["reload"],
    props:{
      topImage:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      ImageLoad(){
        if(!this.isLoad){
          this.$emit('DetailSwiperLoad')
          console.log('DetailSwiperLoad');
          //刷新不闪烁
          this.isLoad = true;
        }
      }
    }
  }
</script>

<style scoped>

</style>
