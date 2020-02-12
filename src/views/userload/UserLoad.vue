<template>
  <div class="user-load">
    <nav-bar class="user-load-nav"><div slot="center">账户登录</div></nav-bar>

    <div class="user-model">
      <div class="user-info">
        <div class="user-name">
          <label for="username" style="margin-left: 10px">账户</label>
          <el-input
            id="username"
            class="el-input"
            placeholder="请输入账户"
            v-model="input"
            clearable>
          </el-input>
        </div>
        <div class="password">
          <label for="password" style="margin-left: 10px">密码</label>
          <el-input id="password"
                    placeholder="请输入密码"
                    v-model="inputPassword"
                    show-password>

          </el-input>
        </div>
        <el-button  @click="userLoadButton" class="load-button" round>登录</el-button>
      </div>

      <div class="bottom">
        <span>短信校验码登录</span>
        <span style="position: absolute;right: 20px;">注册</span>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  export default {
    name: "UserLoad",
    components: {NavBar},
    data(){
      return{
        input:'',
        inputPassword:''
      }
    },
    methods: {
      userLoadButton(){
        if(this.input ==='admin' && this.inputPassword === '123'){
          this.$toast.show('登录成功');
          this.$bus.$emit('userLoadSuccess')
          this.$router.push('/home');
        }else{
          this.$toast.show('密码错误')
        }

        if(this.input ===''&& this.inputPassword === ''){
          this.$toast.show('输入不能为空')
        }

        if(this.input !== '' && this.inputPassword === ''){
          this.$toast.show('密码不能为空')

        }
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .user-load-nav{
    background-color: var(--color-tint);
    font-size: 18px;
    color: #ffffff;
  }
  .user-model{
    position: fixed;
  }
  .user-info{
    margin-top: 10px;
  }
  .el-input{
    width: 300px;
    margin-left:15px;
  }
  .password{
    margin-top: 5px;
  }
  .load-button{
    position: absolute;
    left: 4px;
    right: 0;
    margin:10px auto;
    width: 100%;

    background-color: var(--color-tint);
    color: #ffffff;
    font-size: 18px;
    line-height: 18px;
  }

  span{
    color: var(--color-tint);
  }

  .bottom{
    position: relative;
    top:60px;
    left: 10px;
  }
</style>
