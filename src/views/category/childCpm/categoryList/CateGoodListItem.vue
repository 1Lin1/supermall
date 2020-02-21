<template>
  <div class="cate-good-list-item">
    <div class="item-img"><slot name="img"></slot></div>
    <div class="item-text" ><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "CateGoodListItem"
  }
</script>

<style scoped>
  .cate-good-list-item img {
    margin-top: 5px;
    width: 80px;
    height: 80px;
  }
  .cate-good-list-item{
    margin:10px 10px;
  }
  .item-text{
    text-align: center;
    font-weight: bolder;
    margin-top: 5px;
  }



</style>
