<template>
  <div v-if="Object.keys(goods).length!==0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice|filterPirce}}</span>
      <span class="o-price">{{goods.oldPrice | filterPirce}}</span>
      <span class="desc">{{goods.descmessage}}</span>

      <span class="collect">
        <img src="~assets/img/common/collect.svg"
             @click="collectAdd"
             :class="{activeCollect:true}" >
        收藏{{goods.cfav}}
      </span>
    </div>

  </div>
</template>

<script>
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
    methods:{
      collectAdd(){
        console.log('collect +1');
      }
    },
    filters:{
      filterPirce(price){
        return '$' + Number(price).toFixed(2)
      }
    }
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
