<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :product="item" :key="index" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  data() {
    return {};
  },

  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  /*布局包裹*/
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-between;

  padding: 2px;
  margin-top: 5px;
}
</style>
