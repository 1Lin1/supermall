<template>
  <div>
    <detail-nav @detailItemClick="detailItemClick" ref="detailNav"></detail-nav>

    <scroll
      class="content"
      ref="ScrollVue"
      @scrollPosition="scrollPosition"
      :probeType="3"
      @pullingUpload="pullingUpload"
      :pull-up-load="true"
    >
      <detail-swipper :topImage="topImage" ref="topSwiper" @DetailSwiperLoad="DetailSwiperLoad"></detail-swipper>

      <detail-base-info :goods="goods"></detail-base-info>
      <detail-sale-man :sale-man="saleMan" class="detail-sale-man"></detail-sale-man>
      <detail-show-model :modelImage="modelImage"></detail-show-model>
      <detail-number ref="detailNum"></detail-number>
      <detail-params ref="detailParams"></detail-params>

      <!--      获取推荐商品-->
      <div class="recommend-title">
        <h1 class="recommend-goods">推荐区</h1>
      </div>
      <goods-list ref="goodList" class="good-list" :goods="showGoods"></goods-list>
    </scroll>

    <detail-bottom-bar @addToCart="addToCart" @toCheckCart="toCheckCart"></detail-bottom-bar>
    <back-top class="back-top" @click.native="backToTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import DetailNav from "./chilrenCom/DetailNav";
import Scroll from "../../components/common/scroll/Scroll";
import FeatureView from "../home/childComps/FeatureView";
import DetailBottomBar from "./chilrenCom/DetailBottomBar";
import { backTop } from "../../components/common/util/minxin";
import { getDetailData, Goods } from "../../network/details";
import DetailSwipper from "./chilrenCom/DetailSwipper";
import DetailBaseInfo from "./chilrenCom/DetailBaseInfo";
import DetailSaleMan from "./chilrenCom/DetailSaleMan";
import DetailShowModel from "./chilrenCom/DetailShowModel";
import DetailNumber from "./chilrenCom/DetailNumber";
import DetailParams from "./chilrenCom/DetailParams";
import GoodsList from "../../components/content/goods/GoodsList";
import { getHomeGoods } from "../../network/home";

import { debounce } from "../../common/utils";
import { setShopCartList, getShopCartList } from "../../app/index";

export default {
  name: "Detail",
  components: {
    DetailParams,
    DetailNumber,
    DetailShowModel,
    DetailSaleMan,
    DetailBaseInfo,
    DetailSwipper,
    DetailBottomBar,
    FeatureView,
    Scroll,
    DetailNav,
    GoodsList
  },
  inject: ["reload"],
  // 混入其中
  mixins: [backTop],
  data() {
    return {
      // 一个接受函数 一个接受参数
      getThemeTopY: null,
      detailTopY: [],
      currentIndex: 0,
      topImage: [],
      goods: {},
      saleMan: {},
      modelImage: [],
      showGoods: [],
      isLoadReload: false
    };
  },
  methods: {




    // 跳转到详情页

    detailItemClick(index) {
      this.$refs.ScrollVue.scrollTo(0, -this.detailTopY[index], 200);
    },
    scrollPosition(position) {
      // 进行条件判断
      const positionY = -position.y;
      for (let i = 0; i < this.detailTopY.length - 1; i++) {
        // 第一个判断条件是让她只执行一遍
        if (this.currentIndex != i && positionY >= this.detailTopY[i] && positionY < this.detailTopY[i + 1]) {
          this.currentIndex = i;
          // 取到子组件的index
          this.$refs.detailNav.currentIndex = this.currentIndex;
        }
      }

      // 2.判断是否回到顶部
      this.isShow = positionY > 400;
    },

    // //检测顶部图片加载是否完毕

    //加入购物车
    addToCart() {
      const product = {};
      product.pid = this.goods.pid;
      product.newPrice = this.goods.newPrice;
      product.title = this.goods.title;
      product.topImage = this.goods.topImage;
      product.descmessage = this.goods.descmessage;
      product.cfav = this.goods.cfav;
      this.$store.dispatch("addCart", product).then(res => {
        this.$toast.show(res);

        //添加购物车cookie
        let newShopCartList = getShopCartList();
        if (newShopCartList.length === 0) {
          newShopCartList.push(product);
          setShopCartList(newShopCartList);
        } else {
          let oldShopCart = newShopCartList.filter(
            item => item.pid === this.goods.pid
          );
          if (oldShopCart.length !== 0) {
            newShopCartList.forEach(item => {
              if (item.pid === this.goods.pid) {
                item.count++;
                console.log("我找到相同的商品了");
                setShopCartList(newShopCartList);
              }
            });
          } else {
            console.log("我是不一样的");
            newShopCartList.push(product);
            setShopCartList(newShopCartList);
          }
        }
      });
    },

    //直接点击购买
    toCheckCart() {
      const product = {};
      product.pid = this.goods.pid;
      product.newPrice = this.goods.newPrice;
      product.title = this.goods.title;
      product.topImage = this.goods.topImage;
      product.descmessage = this.goods.descmessage;
      product.cfav = this.goods.cfav;
      this.$store.dispatch("addCart", product).then(res => {
        //添加购物车cookie
        let newShopCartList = getShopCartList();
        if (newShopCartList.length === 0) {
          newShopCartList.push(product);
          setShopCartList(newShopCartList);
        } else {
          let oldShopCart = newShopCartList.filter(
            item => item.pid === this.goods.pid
          );
          if (oldShopCart.length !== 0) {
            newShopCartList.forEach(item => {
              if (item.pid === this.goods.pid) {
                item.count++;
                console.log("我找到相同的商品了");
                setShopCartList(newShopCartList);
              }
            });
          } else {
            console.log("我是不一样的");
            newShopCartList.push(product);
            setShopCartList(newShopCartList);
          }
        }

        this.$router.push("/shopcart");
      });
    },

    // 获取推荐商品
    getGoods() {
      getHomeGoods("pop").then(res => {
        this.showGoods.push(...res);
        // this.$refs.ScrollVue.finishPullUp();
        //
        // this.$refs.ScrollVue.refresh();
        // for (let i = 0; i < res.length; i++) {
        //   this.showGoods.push(res[i])
        // }
      });
    },

    //上拉加载
    pullingUpload() {
      this.getGoods();
    },

    DetailSwiperLoad() {
      this.getThemeTopY();

      //接收点击商品的主页发来的主件 并刷新
      // this.$bus.$on('isReload',() => {
      //   console.log('true');
      //   this.reload();
      //   console.log(this.reload());
      //   // this.$router.go(0);
      // })
    }
  },

  created() {
    let pid = this.$route.query.pid;
    getDetailData(pid).then(res => {
      //尝试封装类思想 面向对象开发
      let data = res[0];
      this.topImage = data.topImage;
      this.goods = new Goods(data);

      this.saleMan = this.goods;
      this.modelImage = data.centerImage;
    });
    //比如这里有一堆请求 请求完渲染才执行下面的添加
    this.getGoods();
  },
  mounted() {
    // this.$nextTick() 此函数为mounted中上方请求全部执行完再执行

    // 监听加载图片 加载完刷新
    const refresh = debounce(this.$refs.ScrollVue.refresh, 500);
    // 只执行一次 获取每部分的offset值 等到图片加载完才正确
    this.getThemeTopY = debounce(() => {
      this.detailTopY = [];
      this.detailTopY.push(0);
      this.detailTopY.push(this.$refs.detailNum.$el.offsetTop - 80);
      this.detailTopY.push(this.$refs.detailParams.$el.offsetTop - 80);
      this.detailTopY.push(this.$refs.goodList.$el.offsetTop - 120);
      this.detailTopY.push(Number.MAX_SAFE_INTEGER);
    }, 500);

    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
};
</script>

<style scoped>
.content {
  overflow: hidden;
  /*溢出元素框 隐藏*/

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.recommend-title {
  position: relative;
}

.recommend-goods {
  text-align: center;
  margin: 5rem 0;
}

.recommend-goods:before {
  content: "";
  height: 1px;
  width: 120px;
  background-color: #eeeeee;
  position: absolute;
  left: 0;
  top: 1.5rem;
}

.recommend-goods:after {
  content: "";
  height: 1px;
  width: 120px;
  background-color: #eeeeee;
  position: absolute;
  right: 0;
  top: 1.5rem;
}

.detail-sale-man {
  margin-bottom: 80px;
}
</style>
