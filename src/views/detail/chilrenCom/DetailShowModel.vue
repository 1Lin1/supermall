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

.detail-model{
  width:100%;

  border-bottom: 3px solid #eeeeee;
  position: relative;

}

.title{
  text-align: center;
  margin-bottom: 5rem;
}

.title:before{
   content: '';
   height: 1px;
   width: 50px;
   background-color: #EEEEEE;
   position: absolute;
   left: 0;
   top: 1rem;
 }

.title:after{
  content: '';
  height: 1px;
  width: 50px;
  background-color: #EEEEEE;
  position: absolute;
  right: 0;
  top: 1rem;
}
  .detail-model-item img {
   width: 100%;
  }
</style>
