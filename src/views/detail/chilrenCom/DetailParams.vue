<template>
  <div class="detail-params">
    <h1 class="params">评论区</h1>
    <img src="~assets/img/detail/3.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "DetailParams"
  }
</script>

<style scoped>
  .params{
    text-align: center  ;

    margin: 5rem 0;

  }

  .params:before{
    content: '';
    height: 1px;
    width: 120px;
    background-color: #EEEEEE;
    position: absolute;
    left: 0;
    top: 1rem;
  }

  .params:after{
    content: '';
    height: 1px;
    width: 120px;
    background-color: #EEEEEE;
    position: absolute;
    right: 0;
    top: 1rem;
  }
  .detail-params{
    position: relative;
    width: 100%;
  }
  .detail-params img{
    max-width: 100%;
  }
</style>
