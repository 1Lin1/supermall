<template>
  <div class="goods-item" @click="itemClick" >
<!--    图片懒加载插件-->
    <img v-lazy="showImage"  @load="imgLoad" >

    <div class="goods-info" >
      <p>{{product.title}}</p>
      <span class="price">{{product.price | filterPrice}}</span>
      <span class="collect">{{product.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    // 注入刷新属性
    // inject:['reload'],

    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    created(){
      //console.log(this.product)
    },
    computed:{
      showImage(){
        return this.product.img || this.product.image || this.product.show.img;
      }
    },

    filters:{
      filterPrice(price){
        return '￥' + Number(price).toFixed(2)
    }
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('itemImageLoad');

        // if(this.$route.path.indexOf('/home')){
        //   this.$bus.$emit('homeItemImageLoad');
        // } else if(this.$route.path.indexOf('/detail')){
        //   this.$bus.$emit('detailItemImageLoad');
        // }
      },


      itemClick(){
        console.log(this.product.pid);
        // 跳转到相对应详情页 带上该商品id
        this.$router.push({
          path:'/detail',
          query:{
            pid:this.product.pid
          }
        }).then(() => {
          // 这种刷新 不好 会闪屏
          // location.reload();
          // this.$bus.$emit('isReload');

          // 刷新一下加载详情轮播图 同时保证home停留的地方不变 不会闪屏
          // 去详情页拿到数据后调用reload刷新 是为了在详情页的推荐点击时刷新
          // this.reload();在详情页路由守卫调用
        })


      }
    },

  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    margin-top: 1rem;
    width: 46%;

  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
    margin-top: 3px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: -5px;
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
    margin-right: 40px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
