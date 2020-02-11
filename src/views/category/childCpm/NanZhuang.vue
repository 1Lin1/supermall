<template>
  <div class="nan-zhuang">
    <category-right>
      <div slot="top" class="topImage">
        <span>裤装</span>
        <img src="./nanzhuang/1.png" alt="">
      </div>

      <div slot="center" class="centerImage">
        <span>外套</span>
        <img src="./nanzhuang/2.png" alt="">
      </div>
      <div slot="bottom" class="bottomImage">
        <span>衬衫</span>
        <img src="./nanzhuang/3.png" alt="">
      </div>

    </category-right>
  </div>
</template>

<script>
  import CategoryRight from "../../../components/common/categoryRight/CategoryRight";
  export default {
    name: "NanZhuang",
    components: {CategoryRight}
  }
</script>

<style scoped>
.nan-zhuang img{
   width: 100%;
   height: 100%;
 }

  .nan-zhuang span {
   position: relative;
   bottom: 5px;
  }


</style>
