<template>
  <div class="login">
    <nav-bar class="user-load-nav"><div slot="center">账户登录</div></nav-bar>

    <div class="load-menu">

      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="6rem" class="demo-ruleForm">



        <el-form-item label="邮箱:" prop="username" class="load-item" for="username">
          <el-input  v-model="ruleForm.username" autocomplete="off" id="username" ></el-input>
        </el-form-item>

        <el-form-item label=" 密码:" prop="checkPass" class="load-item" for="passWord">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            maxlength="20"
            id="passWord"
          ></el-input>
        </el-form-item>

<!--        <el-form-item label="验证码:" prop="mobilePass" class="load-item " for="sureCode">-->



<!--          <el-row :gutter="0">-->
<!--            <el-col :span="15">-->
<!--              <el-input v-model.number="ruleForm.mobilePass"-->
<!--                        id="sureCode"-->
<!--                        maxlength="6">-->
<!--              </el-input>-->
<!--            </el-col>-->

<!--            <el-col :span="6">-->
<!--              <el-button type="success"-->
<!--                         @click="getSureCode"-->
<!--                         :disabled="isDisableGetCode"-->
<!--              >获取验证码</el-button>-->
<!--            </el-col>-->

<!--          </el-row>-->

<!--        </el-form-item>-->


        <el-form-item>
          <el-button type="danger"
                     @click="submitRegisterForm('ruleForm')"
                     class="submit-button "
                     :disabled="isDisableButton"
          >登录</el-button>
          <!--          <el-button @click="resetForm('ruleForm')">重置</el-button>-->
        </el-form-item>
      </el-form>

      <div class="bottom">
        <span style="margin-left: 5rem">短信校验码登录</span>
        <span style="position: absolute;right: 20px;" @click="toRegister">未有账户?/注册</span>
      </div>
    </div>


  </div>

</template>

<script>
  import { stripscript, validatePass, validateEmail, validateVCode } from '@/utils/validate';
  import NavBar from "components/common/navbar/NavBar";
  import {loadUser} from "../../network/login";

  import sha1 from 'js-sha1';
  import cookie from 'js-cookie';
  import {setUserName_Token,setPwd_Token,setShopCartList,getShopCartList} from "../../app/index";



  export default {
    components:{
      NavBar
    },
    data() {
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('账号不能为空'));
          this.isDisableButton  = true;

        } else if(validateEmail(value)){
          this.isDisableButton  = true;

          callback(new Error('邮箱格式有误'));
        }
        else {
          callback();
          this.isDisableButton  = false;

        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(validatePass(value)){
          callback(new Error('请输入6-20位 字母加数字 密码'));
        } else {
          callback();
        }
      };


      // var checkMobilePass = (rule, value, callback) => {
      //   if (!value) {
      //     this.isDisableButton = true;
      //     return callback(new Error('验证码不能为空'));
      //   }
      //   setTimeout(() => {
      //     if (validateVCode(value)) {
      //       callback(new Error('请输入正确验证码'));
      //     } else {
      //       callback();
      //     }
      //   }, 1000);
      // };

      return {
        ruleForm: {
          username: '',
          checkPass: '',
          // mobilePass: '',
        },
        rules: {
          username: [
            { validator: validateUserName, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],

          // mobilePass: [
          //   { validator: checkMobilePass, trigger: 'blur' }
          // ]
        },
        isDisableButton:true,

      };
    },
    methods: {
      submitRegisterForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('登录用户' + this.ruleForm.username + this.ruleForm.checkPass);
            loadUser(this.ruleForm.username,sha1(this.ruleForm.checkPass)).then((res) => {
              console.log(res.length);
              if(res.length !==0){
                this.$toast.show('登录成功');

                // 同时设置登录状态并跳转
                this.$store.state.isUserLoad = true;
                //vuex管理token
                this.$store.dispatch('addUserName_Token',res[0].username);
                this.$store.dispatch('addPwd_Token',res[0].passWord);

                // cookie管理token
                setUserName_Token(res[0].username);
                setPwd_Token(res[0].passWord);


                this.$router.push('/home');
              }else{
                this.$toast.show('密码错误')


              }
            })
          } else {
            this.$toast.show('登录失败 密码错误 请重新登录',1500);
            console.log('error submit!!');
            return false;
          }

        });
      },

      // 跳转注册页面
      toRegister(){
        this.$router.push('/register');
      },
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // },


      // 重置表单
      resetForm() {
        this.$refs['ruleForm'].resetFields();
      }

    },
    activated() {
      if(!this.$store.state.isUserLoad){
        this.$toast.show('请先进行登录',1500);
      }

      // 重置表单
      this.resetForm();
    },
    created() {
      if(getShopCartList()){
        console.log('已经有购物车cookie');
        this.$store.state.shopCart = getShopCartList();

      }else{
        //一创建就设置购物车cookie为空
        setShopCartList([]);
      }


    },
    watch: {
      // 'ruleForm.mobilePass': function (newValue, oldVal) {
      //   let statusLength = newValue.toString().length;
      //   if(this.ruleForm.username && this.ruleForm.checkPass && statusLength === 6){
      //     this.isDisableButton = false;
      //   }else {
      //     this.isDisableButton = true;
      //   }
      // }
    }
  }
</script>

<style scoped >

  .user-load-nav{
    background-color: var(--color-tint);
    font-size: 18px;
    color: #ffffff;
  }
  .submit-button{
    display: block;
    width: 93%;
    border-radius: 5rem;
  }



  .load-menu{
    width: 100%;
    position: fixed;
    left: 0;
    top: 5rem;

  }

  .load-item{
    width: 30rem;
  }

  .login span{
    color: #ff5777;
  }


</style>
