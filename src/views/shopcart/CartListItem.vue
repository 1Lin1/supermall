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

      <div class="item-base">
        <span class="newPrice"> {{itemInfo.newPrice |filterPrice}}</span>

        <span @click="addCount" class="btn-count-group">+</span>
        <span class="count btn-count-group" type="text" @click="dialogFormVisible = true">{{itemInfo.count}}</span>
        <span @click="prodCount" class="btn-count-group">-</span>
      </div>


    </div>

    <el-dialog title="商品数量" :visible.sync="dialogFormVisible" class="dialog-setPosition" width="100%" :modal="false">

      <el-input placeholder="输入您需要的数量"  v-model.number="currentCount" ></el-input>

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
        if(this.currentCount <1){
          this.currentCount = 1;
          this.$toast.show('数量至少为一件',1500);
        }
        this.dialogFormVisible = false;
        this.itemInfo.count = this.currentCount;
        let newShopCartList = getShopCartList();
        newShopCartList.forEach(item => {
          if (item.pid === this.itemInfo.pid) {
            item.count = this.currentCount;
          }
        })
        setShopCartList(newShopCartList);
      },
      addCount(){

        if(this.itemInfo.count >= 2000) {
          this.$toast.show('无法继续增加', 1500);
        }else{
          this.$store.dispatch('addCart',this.itemInfo);

          //更新购物车cookie
          let newShopCartList = getShopCartList();
          newShopCartList.forEach(item => {
            if (item.pid === this.itemInfo.pid) {
              item.count++;
            }
          })
          setShopCartList(newShopCartList);
        }

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
            }
          })
          setShopCartList(newShopCartList);

        }
      },
      checkClick(){
        this.itemInfo.checked = !this.itemInfo.checked;
      },



    },
    mounted() {


      // this.checkChange();
    },
    updated() {
      if(this.currentCount>2000){
        this.$toast.show('已达可购买最大数量',1500);
        this.currentCount = 2000;
      }else if(this.currentCount <1){
        // this.currentCount = 1;

      }
      // if(this.itemInfo.count>2000){
      //   this.$toast.show('已达可购买最大数量',1500);
      //   this.itemInfo.count = 2000;
      // }else if(this.itemInfo.count <1){
      //   this.$toast.show('数量至少为一件',1500);
      //   this.itemInfo.count = 1;
      //
      // }
    },
    filters:{
      filterPrice(price){
        return '￥' + Number(price).toFixed(2)
      }
    },


  }
</script>

<style scoped>


  .cart-list-item{
    position: relative;
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
    font-size: 1.5rem;
  }
  .item-base{
    margin-top: 7.5rem;
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

  .dialog-footer{
   position: relative;
   bottom: 10px;
  }
  .dialog-setPosition{
    position: absolute;
    top:-100px;
    left: 0;
    right: 0;
  }

</style>
