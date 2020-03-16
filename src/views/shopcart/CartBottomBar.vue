<template>
  <div class="bottom-menu">

    <div class="check-content">
      <check-button class="check-button"
                    :is-checked="isSelectAll"
                    @click.native="allCheckButton"
      ></check-button>
      <span>全选</span>

    </div>
    <div class="total-price" v-if="isShowCartBottomBar">
      <div class="price">
        <span class="total-price">合计:{{totalPrice | filterPrice}}</span>
      </div>
      <div class="calculate">
        <el-button size="small"
                   class="buy-product-btn"
                   @click="toCheckOutMoney"
                   type="danger"
                   round>去结算</el-button>
        <!--      <span >去结算({{checkLength}})</span>-->
      </div>
    </div>
    <div v-else class="remove-button">
      <el-button class="cfav-button" size="mini" round @click="removeToCfav">
        移入收藏夹
      </el-button>
      <el-button class="remove-button"
                 type="danger"
                 @click="toRemoveSelectCart"
                 size="mini"
                 round>删除</el-button>
    </div>

    <!--    移除购物车对话框-->
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="100%"
      center
      :modal="false"
    >
      <span class="dialog-span-content">确定要将该商品移出购物车吗？</span>

      <span slot="footer" class="dialog-footer">

    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="danger" @click="sureToDelShopCart" >确 定</el-button>
  </span>
    </el-dialog>


  </div>
</template>

<script>
  import CheckButton from "../../components/content/checkbutton/CheckButton";
  import { mapGetters } from 'vuex';

  import {removeSingleShopCartCookie,setMoney_Token} from "../../app/index";

  export default {
    name: "CartBottomBar",
    components: {CheckButton},
    props:{
      isShowCartBottomBar:{
        type:Boolean,
        default(){
          return true;
        }
      }
    },
    data(){
      return{
        centerDialogVisible: false
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

      },

      //结账
      toCheckOutMoney(){
        if(this.checkLength === 0){
          this.$toast.show('请至少勾选一项商品',1500);
        }else{
          if(this.$store.state.isUserLoad){
            // console.log(this.$store.state.currentMoney);
            let currentMoney = this.$store.state.currentMoney - this.totalPrice;

           if(currentMoney<0){
             this.$toast.show('余额不足 支付失败');
           }else{
             // 差值
             this.$store.dispatch('setCurrentMoney',currentMoney).then(res => {

               // 清掉购物车
               console.log(this.checkGoods);
               this.checkGoods.forEach(item => {
                 this.$store.dispatch('removeShop',item.pid);
                 removeSingleShopCartCookie(item.pid);

                 //同时把余额存cookie
                 setMoney_Token(this.getCurrentMoney)
               })
               this.$toast.show(res,1500);
             });
           }

            console.log('余额还剩' + this.getCurrentMoney);
          }else{
            this.$toast.show('请先进行登录~',1500);
            this.$router.push('/login');
          }
        }


      },


      //删除选中的购物车
      toRemoveSelectCart(){
        let selectCart = this.CartList.filter(item => item.checked === true);
        console.log(selectCart);
        if(selectCart.length !== 0){
          this.centerDialogVisible = true;
        }else{
          this.$toast.show('请至少勾选一项商品进行管理',1500);
        }

      },

      //移除购物车弹窗
      sureToDelShopCart(){
        let selectCart = this.CartList.filter(item => item.checked === true);
        this.centerDialogVisible = false;
        selectCart.forEach(item => {
          this.$store.dispatch('removeShop',item.pid).then(res =>{
            removeSingleShopCartCookie(item.pid);
          })
        })

        this.$toast.show('所选商品已移出购物车',1500);

      },

      //移入收藏夹

      removeToCfav(){
        this.$toast.show('移入收藏夹成功',1500);
      }
    },
    mounted() {

    },
    computed:{
      // 获取商品信息
      ...mapGetters(['CartList','CartLength','getCurrentMoney']),

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

      //已勾选的商品
      checkGoods(){
        return this.CartList.filter(item => item.checked)
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
    bottom: 5rem;
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
    position: absolute;
    left: 14rem;
    color: #666;
  }


  .calculate{
    position: absolute;
    top:0;
    left: 25rem;
    /*border-bottom:2px solid #eeeeee;*/
  }

  .remove-button{
    position: absolute;
    top: 0.3rem;
    right: 1rem;
    color: #ff1532;
    background-color: transparent;
  }

  .cfav-button{
    position: absolute;
    right: 7rem;
    top: 0.3rem;
    color:#F97F51;
    background-color: transparent;
    border:1px solid #F97F51;
  }
  .buy-product-btn{
    background-color: #eb2f06;
  }


  .dialog-span-content{
    position: relative;
    left: 2.5rem;
    font-size: 1.8rem;
    color: #EA2027;
  }
</style>
