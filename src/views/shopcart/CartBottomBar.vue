<template>
  <div class="bottom-menu">
    <div class="check-content">
      <div>{{message}}</div>
      <check-button class="check-button" :is-checked="true" ref="allCheckButton" ></check-button>
      <span>全选</span>

    </div>
    <div class="price">
      <span class="total-price">合计:{{totalPrice}}</span>
    </div>
    <div class="calculate">
      <span class="buy-product">去计算({{checkLength}})</span>
    </div>

  </div>
</template>

<script>
  import CheckButton from "../../components/content/checkbutton/CheckButton";
  import { mapGetters } from 'vuex';

  export default {
    name: "CartBottomBar",
    components: {CheckButton},
    data(){
      return{
        message:false,
      }
    },
    mounted() {

    },
    computed:{
      // 获取商品信息
      ...mapGetters(['CartList','CartLength']),

      // 过滤checked为true的满足的商品
      totalPrice(){
        return this.CartList.filter(item => {
          return item.checked;
        }).reduce((proValue,item) => {
          return proValue + item.price * item.count;
        },0).toFixed(2);
      },
      checkLength(){
        return this.CartList.filter(item => item.checked).length;
      },
      // isSelectAll(){
      //
      //
      //   // if(this.CartList.length === 1) return true
      //   // if(this.CartList.length === 0) return false;
      //
      //
      //   // 1.filter方法
      //   // return !this.CartList.find(item => !item.checked).length
      //   // if(this.CartList.find(item => item.checked).length === 0 )
      //   // {
      //   //   return false;
      //   // }
      //   // 普通方法
      //   // console.log('select');
      //   // for(let item of this.CartList){
      //   //   console.log(item);
      //   //   if(!item.checked){
      //   //     console.log('item的返回值是' + item.checked);
      //   //     return item.checked;
      //   //   }
      //   // }
      //   // return true;
      //
      //   //
      //   // return true;
      //
      //
      // }
      isSelectAll(){
        return this.message;
      }


    },




  }
</script>

<style scoped>
.bottom-menu{
    width: 100%;
    position: fixed;
    bottom: 50px;
    background-color: #eee;
    display: flex;

    height: 40px;
    line-height: 40px;
  }

  .check-content{
      display: flex;
      align-items: center;
      margin-left: 10px;
  }
  .check-button {
      width: 20px;
      height: 20px;
      line-height: 20px;
      margin-right: 5px;
  }
  .price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }



</style>
