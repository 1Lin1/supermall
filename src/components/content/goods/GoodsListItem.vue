<template>
  <div class="goods-item" @click="itemClick">
    <img :src ="product" alt="" @load="imageLoad">
    <div>
      <span class="goods-info">可爱</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      product: null

    },
    created(){
      //console.log(this.product)
    },
    computed:{

    },
    methods:{
      imageLoad(){
        this.$bus.$emit('imageLoad')
      },
      itemClick(){
        // console.log('itemclick');
        this.$router.push({
          path:'/detail',
          query:{
            id:111,
            name:'lh',
          }
        })
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 30px;
    position: relative;

    width: 46%;
    margin-top: 5px
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-weight: bolder;
    font-size: 20px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
