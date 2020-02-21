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

      <!-- 小对话框 -->
      <button type="button"
              class="btn btn-danger remove-shop-cart"
              data-toggle="modal"
              data-target="#mySmModal">
        <span class="remove-span">移除</span>
      </button>

      <div class="modal fade" id="mySmModal" >
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-body" style="text-align: center">
              <h3>确认将该商品移出购物车吗？</h3>
            </div>
            <div class="modal-footer ">
              <div class="model-btn">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-danger"  @click="btnRemoveShop(itemInfo.pid)" data-dismiss="modal">确定</button>
              </div>
            </div>
          </div>

        </div>
      </div>

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
    inject:['reload'],
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
          this.$toast.show(res,2000);
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

  .model-btn{
    text-align: center;
  }
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
