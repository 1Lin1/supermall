<template>
  <div class="bottom-menu">
    <div class="check-content">
      <check-button class="check-button"
                    :is-checked="isSelectAll"
                    @click.native="allCheckButton"
                      ></check-button>
      <span>全选</span>

    </div>
    <div class="price">
      <span class="total-price">合计:{{totalPrice | filterPrice}}</span>
    </div>
    <div class="calculate">
      <span class="buy-product">去结算({{checkLength}})</span>
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

      }
    },
    methods:{
      allCheckButton(){
        // 1.第一种写法
        if(this.isSelectAll){
          this.CartList.forEach(item => item.checked = false)
        }else{
          this.CartList.forEach(item => item.checked = true)

        }

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
          return proValue + item.newPrice * item.count;
        },0).toFixed(2);
      },
      checkLength(){
        return this.CartList.filter(item => item.checked).length;
      },
      isSelectAll(){

        //效率写法 filter过滤 激活样式不要用data
        if(this.CartLength === 0) return false;
        return !(this.CartList.filter(item => !item.checked).length)
      }




    },
    filters:{
      filterPrice(price){
        return '￥' + Number(price).toFixed(2)
      }
    }




  }
</script>

<style scoped>
.bottom-menu{
    width: 100%;
    position: fixed;
    bottom: 60px;
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
.calculate{
  position: absolute;
  background-color: #ff1e32;
  color: #eeeeee;
  right: 20px;

  /*border-bottom:2px solid #eeeeee;*/
}


</style>
