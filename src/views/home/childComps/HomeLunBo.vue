<template>
  <div class="block">
    <el-carousel height="180px" arrow="always">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img class="image" :src="item.image" alt="" @load="imageLoad">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "HomeLunBo",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      imageLoad(){
        if(!this.isLoad){
          this.$emit('swipperImageLoad')
          this.isLoad = true
        }
      }
    },
  }
</script>

<style scoped>
.image{
  width: 100%;
  height: 100%;
}
</style>
