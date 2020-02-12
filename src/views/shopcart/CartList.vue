<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <div>
        <cart-list-item
          v-for="item in CartList"
          :key="item.pid"
          :item-info="item"

        ></cart-list-item>
      </div>

    </scroll>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Scroll from "../../components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";

  export default {
    name: "CartList",
    components: {CartListItem, Scroll},
    computed:{
      ...mapGetters(['CartList'])
    },
    activated() {
      // 激活时刷新 这样购物车才能拿到数据
      console.log('购物车刷新数据');
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>

.cart-list{
  height: 100vh;
}
.content{
  height: calc(100% - 100px - 40px);
  overflow: hidden;
}
</style>
