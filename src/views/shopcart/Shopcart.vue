<template>
  <div  class="shop-cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>


    <div v-if="isShowCart">
      <cart-list ></cart-list>
      <cart-bottom-bar ></cart-bottom-bar>
<!--      <cart-list v-show="isUserLoad"></cart-list>-->
<!--      <cart-bottom-bar v-show="CartLength"></cart-bottom-bar>-->
    </div>

    <div v-else>
      <h1 class="warn-load">购物车空空如也 快去添加吧~</h1>
    </div>

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
       isShowCart:false,
      }
    },
    methods:{

    },
    computed:{
      ...mapGetters(['CartLength'],['CartList']),

    },
    activated() {

      if(this.$store.state.shopCart){
        this.isShowCart = true;
      }else{
        this.isShowCart = false;
      }
      // console.log('购物车' + this.CartLength);
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
.warn-load{
  text-align: center;
  position: relative;
  top: 20rem;
}
  /*.content{*/
  /*  height: calc(100% - 100px);*/
  /*  !*height: 100%;*!*/
  /*  overflow: hidden;*/
  /*}*/
</style>
