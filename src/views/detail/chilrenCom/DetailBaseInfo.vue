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
        收藏{{newCfav}}
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
            this.$toast.show(res.message, 2000);
            this.newCfav = res.oldProduct.cfav;
            console.log(res.oldProduct);
          })
        }else if(!this.$store.getters.CartLength){
          this.$toast.show("请先加入购物车~~~")
        } else{
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
  margin-top: 25px;
  margin-bottom: 20px;
  padding: 0 8px;
  color: #999;

  border-bottom: 2px solid #eeeeee;
}

  .info-title{
    color:black;
  }

.info-price {
  margin-top: 10px;
  width: 100%;
}
.info-price img{
  padding-top: 3px;
  max-width: 5%;
}

.activeCollect{
  /*background-color: red;*/
}

.n-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.o-price {
  font-size: 15px;
  margin-left: 5px;
  text-decoration: line-through;
}
  .desc{
    margin-left: 20px;
    color: red;
    font-size: larger;
  }

  .collect{
    position: relative;
    left: 20px;
  }

</style>
