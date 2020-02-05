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

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
      </ul>
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
