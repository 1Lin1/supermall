<template>
  <div class="detail-model" >
    <h2 class="title">MODEL SHOW 模特展示</h2>
    <div v-for="item in modelImage" class="detail-model-item">
      <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShowModel",
    props:{
      modelImage:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .title{
    text-align: center;
    margin: 20px 0;
  }
.detail-model{
  width:100%;

  border-bottom: 3px solid #eeeeee;

}
  .detail-model-item img {
    max-width: 100%;
  }
</style>
