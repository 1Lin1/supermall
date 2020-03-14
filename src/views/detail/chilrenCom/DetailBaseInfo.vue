<template>
  <div v-if="Object.keys(goods).length!==0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice|filterPirce}}</span>
      <span class="o-price">{{goods.oldPrice | filterPirce}}</span>
      <span class="desc">{{goods.descmessage}}</span>

      <span class="collect"  @click="collectAdd">
        <img src="~assets/img/common/collect.svg"

             :class="{activeCollect:true}" >
            收藏&nbsp{{newCfav}}
      </span>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        newCfav:''
      }
    },
    created() {
    },
    methods:{
      collectAdd(){
        if(this.$store.state.isUserLoad && this.$store.getters.CartLength) {
          console.log('可以加收藏了');
          this.$store.dispatch('addCfav', this.goods).then(res => {
            if(res.oldProduct === null){
              this.$toast.show(res.message, 2000);

            }else{
              this.$toast.show(res.message, 2000);
              this.newCfav = res.oldProduct.cfav;
            }
            console.log(res.oldProduct);
          })
        }else if(!this.$store.getters.CartLength){
          this.$toast.show("请先加入购物车~~~")
        }else{
          this.$router.push('/userload');
          this.$toast.show('亲 请先登录');
        }
      }
    },
    filters:{
      filterPirce(price){
        return '$' + Number(price).toFixed(2)
      }
    },
    computed:{

    },

  }
</script>

<style scoped>
  .base-info{
    padding: 1rem;
    color: #999;

    border-bottom: 2px solid #eeeeee;
  }

  .info-title{
    color:black;
    font-size: 1.5rem;
  }

  .info-price {
    margin-top: 10px;
    width: 100%;
  }
  .info-price img{
    max-width: 5%;
    padding-bottom: 3px;
  }


  .n-price {
    font-size: 24px;
    color: #ff3f34;
  }

  .o-price {
    font-size: 15px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .desc{
    margin-left:2rem;
    color: #ff3f34;
    font-size: 2rem;
  }

  .collect{
    position: relative;
    left: 20px;
  }

</style>
