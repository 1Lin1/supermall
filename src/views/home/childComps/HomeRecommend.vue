<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href=item.link>
        <img :src=item.image alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 15px;
    border-bottom: 5px solid #eeeeee;
  }
  recommend-item {
    flex: auto;
    margin-bottom: 3px;
  }
  .recommend-item img {
    max-width: 90%;
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>
