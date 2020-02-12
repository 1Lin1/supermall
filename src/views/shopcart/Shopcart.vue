<template>
  <div  class="shop-cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{CartLength}})</div>
    </nav-bar>

    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  // 导入vuex的mapGetters来设计计算属性
  import {mapGetters} from "vuex";
  import CartList from "./CartList";
  import CartBottomBar from "./CartBottomBar";
  export default {
    name: "Cart",
    components: {
      CartBottomBar,
      CartList,
      NavBar
    },
    data(){
      return{

      }
    },
    methods:{

    },
    computed:{
      ...mapGetters(['CartLength'],['CartList']),

    },
    activated() {
    }

  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color:#eeeeee;
  }

  .shop-cart{
    height: 100vh;
  }

  .content{
    height: calc(100% - 100px);
    /*height: 100%;*/
    overflow: hidden;
  }
</style>
