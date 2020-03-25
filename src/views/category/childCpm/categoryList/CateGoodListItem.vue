<template>
  <div class="cate-good-list-item">
    <div class="item-img" @load="ImageLoad"><slot name="img"></slot></div>
    <div class="item-text" ><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "CateGoodListItem",
    data(){
      return{
        isLoad:false,
      }
    },
    methods:{
      // 检验是否分类图片加载完成
      ImageLoad(){
        if(!this.isLoad){
          this.$bus.$emit('cateImageLoad')
          console.log('cateImageLoad');
          this.isLoad = true;
        }
      }
    }
  }
</script>

<style scoped>
  .cate-good-list-item img {
    margin-top: 1rem;
    height: 5.5rem;
  }
  .cate-good-list-item{
    margin:2rem 2rem;
  }
  .item-text{
    text-align: center;
    font-weight: bolder;
    margin-top: 5px;
  }



</style>
