<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <div class="privateImage-svg left">
          <img src="~assets/img/profile/12.jpg" alt="">
        </div>
<!--        <svg class="privateImage-svg left">-->
<!--          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>-->
<!--        </svg>-->
      </slot>
      <div class="login-info left"  >
        <slot name="user-nickname">
          <div v-if="!isActive">
            <span @click="loadClick">登录/</span>
            <span @click="registerClick">注册</span>
          </div>

          <div v-else>
            <span >{{UserName}}</span>
            <span class="load-out" @click="loadOut">退出</span>
          </div>
        </slot>
        <div class="phone" >
          <slot name="user-phone" >暂无绑定手机号</slot>
        </div>
      </div>


    </a>
  </div>
</template>

<script>

  import {removeUserName_Token,removePwd_Token,getUserName_Token} from "../../../app/index";
  import { mapGetters } from 'vuex';

	export default {
		name: "UserInfo",
    data(){
		  return{
		    isActive:false,
        UserName:''
      }
    },
    activated() {
      this.isActive =  this.$store.state.isUserLoad;
      this.UserName = getUserName_Token();

    },
    created() {
		  // this.$bus.$on('userLoadSuccess',isLoad =>{
		  //   this.isActive = true;
      // })
    },
    methods:{
      loadClick(){
        this.$router.push('/login')
      },
      loadOut(){

        removeUserName_Token();
        removePwd_Token();

        this.$store.dispatch('addUserName_Token','');
        this.$store.dispatch('addPwd_Token','').then(res => {
          this.$toast.show('退出成功~')
        });

        this.$store.state.isUserLoad = false;
        this.isActive = false;
      },
      registerClick(){
        this.$router.push('/register')

      }
    }
	}
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }

  #user-info .privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
  }

  .privateImage-svg img {
    border-radius: 30px;
  }

  .left {
    float: left;
  }

  #user-info .arrow-svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }

  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
  }

  #user-info .login-info .phone {
    position: relative;

    font-size: 13px;
    margin-top: 5px;
    font-weight: 300;
  }

  #user-info .login-info .phone .icon-mobile {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -15px;
    top: 0px;
  }

  .load-out{
    position: fixed;
    right: 20px;
  }
</style>
