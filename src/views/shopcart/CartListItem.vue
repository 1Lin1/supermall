<template>
  <div class="cart-list-item">
    <check-button
      :is-checked="itemInfo.checked"
      @click.native= "checkClick"
      ref="checkButton"
      class="check-button"

    ></check-button>

    <div class="item-img" >
      <img :src="showImage" alt="商品图片" >
    </div>

    <div class="item-info">
      <span class="title">{{itemInfo.title}}</span>

      <!-- 小对话框 -->
      <button type="button"
              class="btn btn-danger remove-shop-cart"
              data-toggle="modal"
              :data-target="'#' + showModelId">
        <span class="remove-span">移除</span>
      </button>

      <div class="modal fade" :id="showModelId" >
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

         <span @click="addCount" class="btn-count-group">+</span>
         <span class="count btn-count-group" type="text" @click="dialogFormVisible = true">{{itemInfo.count}}</span>
         <span @click="prodCount" class="btn-count-group">-</span>
      </div>


    </div>

    <el-dialog title="商品数量" :visible.sync="dialogFormVisible">

      <el-input placeholder="输入您需要的数量" v-model.number="currentCount" ></el-input>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
        <el-button type="danger" @click="dialogButton" size="small">确 定</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>


  import CheckButton from "../../components/content/checkbutton/CheckButton";
  import {getShopCartList, removeSingleShopCartCookie, setShopCartList} from "../../app/index";
  import { mapGetters } from 'vuex';


  export default {
    name: "CartListItem",
    components: { CheckButton},
    inject:['reload'],
    data(){
      return{
        showModelId:'MyModel'+ this.itemInfo.pid,
        dialogFormVisible: false,
        currentCount:this.itemInfo.count,
      }
    },
    props:{
      itemInfo:Object,
      default(){
        return {}
      },

    },
    computed:{
      showImage(){
        return this.itemInfo.topImage;
      },
      ...mapGetters(['CartList'])

    },
    methods:{

      dialogButton(){
        this.dialogFormVisible = false;
        this.itemInfo.count = this.currentCount;
        let newShopCartList = getShopCartList();
        newShopCartList.forEach(item => {
          if (item.pid === this.itemInfo.pid) {
            item.count = this.itemInfo.count;
            console.log('增加一堆一样的商品');
          }
        })
        setShopCartList(newShopCartList);
      },
      addCount(){
        this.$store.dispatch('addCart',this.itemInfo);

        //更新购物车cookie
        let newShopCartList = getShopCartList();
        newShopCartList.forEach(item => {
          if (item.pid === this.itemInfo.pid) {
            item.count++;
            console.log('增加一样的商品');
          }
        })
        setShopCartList(newShopCartList);
      },
      prodCount(){

        if(this.itemInfo.count === 1){
          this.$toast.show('无法继续减少',1500);
        }else{
          this.$store.dispatch('prodCart',this.itemInfo);


          //更新购物车cookie

          let newShopCartList = getShopCartList();
          newShopCartList.forEach(item => {
            if (item.pid === this.itemInfo.pid) {
              item.count--;
              console.log('减去一样的商品');
            }
          })
          setShopCartList(newShopCartList);

        }
      },
      checkClick(){
        this.itemInfo.checked = !this.itemInfo.checked;
      },

      // 移除购物车
      btnRemoveShop(pid){
        console.log('btnRemove' + pid);
        this.$store.dispatch('removeShop',pid).then(res =>{
          this.$toast.show(res,1500);
          removeSingleShopCartCookie(pid);
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
    updated() {
      console.log('updated');
      if(this.itemInfo.count>2000){
        this.$toast.show('已达可购买最大数量',1500);
        this.itemInfo.count = 2000;
      }else if(this.itemInfo.count <1){
        this.$toast.show('数量至少为一件',1500);
        this.itemInfo.count = 1;

      }
    },
    filters:{
      filterPrice(price){
        return '￥' + Number(price).toFixed(2)
      }
    },


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
    bottom:60px;

  }
  .cart-list-item{
    display: flex;
    width: 100%;

    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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


  .btn-count-group{
    text-align: center;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 1.5rem;
    border: 1px solid #dddddd;
  }

  .count{
    width: 3.6rem;
  }
  .btn-count-group:nth-child(2){
    border-right: none;
  }
  .btn-count-group:nth-child(3){
    border-right: none;
  }

</style>
