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
    justify-content: space-evenly;

    width: 100%;
    text-align: center;
    font-size: 15px;
    border-bottom: 2px solid #eeeeee;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .recommend-item {
    margin-bottom: 3px;
  }
  .recommend-item img {
    width: 90%;
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>
