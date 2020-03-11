<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div @click="servicePeople">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart fontBold" @click="addToCart">加入购物车</div>
      <div class="buy fontBold" @click="toCheckCart">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    data(){
      return{
      }
    },
    methods: {
      addToCart() {

        // 不用登录就可以加购物车模式
        this.$emit('addToCart')

        // 需要登录才可以加购物车模式
        // if(this.$store.state.isUserLoad){
        //   this.$emit('addToCart')
        // }else{
        //   this.$router.push('/login');
        //   this.$toast.show('亲 请先登录');
        // }



      },
      servicePeople(){
        this.$toast.show('客服暂未上线',2000)
      },
      toCheckCart(){
        this.$router.push('/shopcart');
      }
    },

    mounted() {
      //检测是否已登录 未登录则跳转登录界面
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 58px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;

    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: #f69;
  }
</style>
