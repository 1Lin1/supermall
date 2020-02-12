<template>
  <div class="block">
    <el-carousel height="120px">
      <el-carousel-item v-for="(item,index) in topImageData" :key="index">
        <a :href="item.link">
          <img class="image" :src="item.image" alt="">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
<!--  <div class="block">-->
<!--    <el-carousel >-->
<!--      <el-carousel-item v-for="(item,index) in topImageData" :key="index" class="el-item">-->
<!--        <a :href="item.link">-->
<!--          <el-image-->
<!--            :src="item.image"-->
<!--            fit="fill"-->
<!--            ></el-image>-->
<!--        </a>-->
<!--      </el-carousel-item>-->
<!--    </el-carousel>-->


<!--  </div>-->
</template>

<script>


  export default {
    name: "ZouMaD",
    props:{
      topImageData:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
      }
    },
    methods:{

    },
    created() {
    },

  }
</script>

<style scoped>


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
 .image{
   width: 100%;
   height: 100%;
 }

</style>
