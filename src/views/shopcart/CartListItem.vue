<template>
  <div class="cart-list-item">
    <check-button
      :is-checked="itemInfo.checked"
      @click.native= "checkClick"
      ref="checkButton"
      class="check-button"
    ></check-button>

    <div class="item-img">
      <img :src="showImage" alt="商品图片">
    </div>

    <div class="item-info">
      <span class="title">{{itemInfo.title}}</span>
      <el-button
        class="remove-shop-cart"
        @click="btnRemoveShop(itemInfo.pid)"
        type="danger" round
      ><span class="remove-span">移除</span></el-button>

      <div class="item-base">
        <span class="newPrice"> {{itemInfo.newPrice |filterPrice}}</span>
        <span class="count">x{{itemInfo.count}}</span>
      </div>

    </div>

  </div>
</template>

<script>
  import CheckButton from "../../components/content/checkbutton/CheckButton";
  export default {
    name: "CartListItem",
    components: { CheckButton},
    props:{
      itemInfo:Object,
      default(){
        return {}
      }
    },
    computed:{
      showImage(){
        return this.itemInfo.topImage;
      }
    },
    methods:{
      checkClick(){
        this.itemInfo.checked = !this.itemInfo.checked;
      },

      // 移除购物车
      btnRemoveShop(pid){

        console.log('btnRemove' + pid);
        this.$store.dispatch('removeShop',pid).then(res =>{
          console.log(res);
        })
      }
      // checkChange(){
      //   console.log('checkchange');
      //   console.log(this.itemInfo.checked);
      //   this.itemInfo.checked = !this.itemInfo.checked;
      //   // this.$refs.checkButton.checked =  this.itemInfo.checked
      //   console.log('点击后' + this.itemInfo.checked);
      //
      //   // this.$bus.$emit('on-click',!this.itemInfo.checked )
      //   // this.$refs.checkButton.checked = !this.$refs.checkButton.checked;
      //   // this.itemInfo.checked = !this.itemInfo.checked;
      // }
    },
    mounted() {

      // this.checkChange();
    },
    filters:{
      filterPrice(price){
        return '￥' + Number(price).toFixed(2)
      }
    }

  }
</script>

<style scoped>
  .remove-span{
    font-size: 15px;
    position: relative;
    bottom: 5px;
  }
  .remove-shop-cart{
    width: 80px;
    height: 30px;
    display: block;

    position: absolute;
    left: 0;
    right: 10px;
    margin:0 auto;
    bottom:50px;

  }
  .cart-list-item{
    display: flex;
    width: 100%;

    border-bottom: 2px solid #eeeeee;
  }
  .item-info{
    position: relative;
    margin-top: 10px;
  }

  .check-button{
    margin-left: 10px;
    margin-top: 10px;
  }
  .item-img img{
    margin: 10px 20px;
    width: 80%;
  }

  .newPrice{
    margin-right: 20px;
  }
  .item-base{
    margin-top: 110px;
  }
</style>
