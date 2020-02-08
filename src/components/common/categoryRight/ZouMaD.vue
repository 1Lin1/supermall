<template>
  <div class="block">
    <el-carousel height="114px">
      <el-carousel-item v-for="(item,index) in topImageData" :key="index" class="el-item">
        <a :href="item.link">
          <el-image
            :src="item.image"
            fit="fill"
            ></el-image>
        </a>
      </el-carousel-item>
    </el-carousel>


  </div>
</template>

<script>

  import {getTopImage} from "../../../network/weipinhui";

  export default {
    name: "ZouMaD",
    data(){
      return{
        topImageData:[]
      }
    },
    methods:{
      getTopImage(){
        getTopImage('weipinhui').then(res => {
          this.topImageData = res[0].topImage;
          console.log(this.topImageData);
        })
      }
    },
    created() {
      this.getTopImage()
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
  .el-item img{
    width: 100%;
    height: 100%;
  }

</style>
