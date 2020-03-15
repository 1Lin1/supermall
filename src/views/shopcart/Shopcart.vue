<template>
  <div  class="shop-cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
      <div slot="right">
        <span class="resolve-shopCart-button" @click="toResolveShop">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shezhi"></use>
            </svg>
          {{resolveMessage}}
        </span>
      </div>
    </nav-bar>


    <div v-if="isShowCart">
      <cart-list ></cart-list>
      <cart-bottom-bar :is-show-cart-bottom-bar="isShowCartBottomBar" ></cart-bottom-bar>
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
  import {getShopCartList} from "../../app/index";
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
        isShowCartBottomBar:true,
        resolveMessage:'管理'
      }
    },
    methods:{

      //管理购物车
      toResolveShop(){
        this.isShowCartBottomBar = !this.isShowCartBottomBar;
        if(this.isShowCartBottomBar){
          this.resolveMessage = '管理';
        }else{
          this.resolveMessage = '完成'

        }
      },


    },
    computed:{
      ...mapGetters(['CartLength'],['CartList']),

    },
    activated() {
      //将关闭网页的购物车cookie直接返回复制给vuex
      this.$store.state.shopCart = getShopCartList();

      if(this.CartLength!==0){
        this.isShowCart = true;
      }else{
        this.isShowCart = false;
      }
      // console.log('购物车' + this.CartLength);

      //设置一激活为结算按钮
      if(this.resolveMessage === '完成'){
        this.resolveMessage = '管理';
        this.isShowCartBottomBar = true;

      }
    }

  }
</script>

<style scoped>


  .resolve-shopCart-button{
    font-size: 1.2rem;
  }
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
