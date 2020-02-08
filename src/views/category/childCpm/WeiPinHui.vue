<template>
  <div class="weipinhui">
    <category-right>
      <zou-ma-d slot="top"></zou-ma-d>

      <cate-good-list slot="center" >
        <cate-good-list-item style="margin-top: 15px" >
          <span slot="header">手机推荐</span>
          <img src="https://gd4.alicdn.com/imgextra/i1/3876145546/O1CN01I9jegN1qq78BrZazy_!!3876145546.jpg"
               slot="img">
          <span slot="text">猪恬</span>

        </cate-good-list-item>
        <cate-good-list-item style="margin-top: 30px">

          <img src="https://gd4.alicdn.com/imgextra/i1/3876145546/O1CN01I9jegN1qq78BrZazy_!!3876145546.jpg"
               slot="img">
          <span slot="text">猪恬</span>

        </cate-good-list-item>
        <cate-good-list-item >

          <img src="https://gd4.alicdn.com/imgextra/i1/3876145546/O1CN01I9jegN1qq78BrZazy_!!3876145546.jpg"
               slot="img">
          <span slot="text">猪恬</span>

        </cate-good-list-item>
        <cate-good-list-item >

          <img src="https://gd4.alicdn.com/imgextra/i1/3876145546/O1CN01I9jegN1qq78BrZazy_!!3876145546.jpg"
               slot="img">
          <span slot="text">猪恬</span>

        </cate-good-list-item>

      </cate-good-list>


      <h1 slot="bottom">我是下面</h1>
    </category-right>
  </div>
</template>

<script>
  import CategoryRight from "../../../components/common/categoryRight/CategoryRight";
  import ZouMaD from "../../../components/common/categoryRight/ZouMaD";
  import CateGoodList from "./categoryList/CateGoodList";
  import CateGoodListItem from "./categoryList/CateGoodListItem";

  export default {
    name: "WeiPinHui",
    components: {CateGoodListItem, CateGoodList, ZouMaD, CategoryRight}
  }
</script>

<style scoped>


</style>
