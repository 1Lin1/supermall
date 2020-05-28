<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div slot="center">
        个人主页
      </div>
    </nav-bar>

    <div>
      <user-info></user-info>
    </div>

    <div class="account">
      <div class="account-item">
        <div class="number">
          <span v-if="isUserLoad"><span  class="balance">{{getCurrentMoney|filterPrice}}</span>元</span>
          <span v-else><span  class="balance">0.00</span>元</span>
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </div>


      <list-view :list-data="orderList" class="order-list"></list-view>
      <list-view :list-data="serviceList" class="service-list"></list-view>
      <list-view :list-data="moreList" class="more-list"></list-view>
  </div>

</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import UserInfo from './childComps/UserInfo';
import ListView from './childComps/ListView';

import { mapGetters } from 'vuex';
import {getMoney_Token} from "../../app/index";


export default {
  name: 'Profile',
  components:{
    NavBar,
    UserInfo,
    ListView
  },
  data() {
    return {
        // a:1,
        orderList: [
          {icon: '#icon-xiaoxi', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#icon-jifen', iconColor: '#fc7b53', info: '积分商城'},
          {icon: '#icon-shenqingchengweiVIP', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#icon-icon-test', iconColor: '#ff8198', info: '我的购物车'},
          {icon: '#icon-xiazai', iconColor: '#ff8198', info: '下载购物APP'},
        ],
        moreList:[
          {icon: '#icon-shezhi', iconColor: '#ff8198', info: '设置'},
          {icon: '#icon-gengduo', iconColor: '#ff8198', info: '更多'},
        ]
    }
  },
  methods:{

  },
  mounted() {
    // this.a = 2
  },
  activated() {

    //若有存粗余额cookie 直接赋值
    if(getMoney_Token()){
      this.$store.dispatch('setCurrentMoney',getMoney_Token())
    }
  },
  computed:{
    ...mapGetters(['getCurrentMoney','isUserLoad']),

  },
  filters:{
    filterPrice(price){
      return  Number(price).toFixed(2);
    }
  },

  //测试watch
  // watch: {
  //    a:(newValue, oldVal) => {
  //     console.log( newValue, oldVal )
  //   }
  // },
 }
</script>

<style scoped>
#profile{
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
  background-color: #f2f2f2;
}
.profile-nav{
  background-color: var(--color-tint);
  color: #fff;
/*
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
  .account {
    display: flex;
  }

  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }

  .order-list, .service-list {
    margin-top: 12px ;

  }
  .order-list, .more-list {
    margin-top: 12px;
  }

</style>
