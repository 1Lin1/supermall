<template>
  <div class="cate-good-list" >


    <slot >

    </slot>
  </div>
</template>

<script>
  export default {
    name: "CateGoodList"
  }
</script>

<style scoped>

  .cate-good-list{
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-between;

  }




</style>
