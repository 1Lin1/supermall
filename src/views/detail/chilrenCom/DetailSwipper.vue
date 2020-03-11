<template>
  <div>
    <swiper>
      <swiper-item v-for="item in topImage">
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
          this.isLoad = true;
        }
      }
    }
  }
</script>

<style scoped>

</style>
