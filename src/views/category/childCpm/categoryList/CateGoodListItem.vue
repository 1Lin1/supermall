<template>
  <div class="cate-good-list-item">
    <div class="item-header"><slot name="header"></slot></div>
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
    width: 80px;
    height: 80px;
  }
  .cate-good-list-item{
    margin:10px 10px;
  }
  .item-text{
    font-size: 15px;
    text-align: center;
    font-weight: bolder;
    font-family: 微软雅黑;
  }

  .item-header{
    font-family: 微软雅黑;
    font-size: 15px;
    font-weight: bolder;
    position: relative;
    z-index: 99;
    right: 30px;
    bottom: 25px;
  }

</style>
