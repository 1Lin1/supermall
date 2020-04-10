<template>
  <div class="login" >
    <nav-bar class="user-load-nav"><div slot="center">账户注册</div></nav-bar>
    <div class="load-menu">

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="8rem" class="demo-ruleForm">



          <el-form-item label="邮箱:" prop="username" class="load-item" for="username">
            <el-input  v-model="ruleForm.username" autocomplete="off" id="username"></el-input>
          </el-form-item>

          <el-form-item label="密码:" prop="checkPass" class="load-item" for="passWord">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
              maxlength="20"
              id="passWord"

            ></el-input>
          </el-form-item>


          <el-form-item label="确认输入:" prop="checkPassAgain" class="load-item" for="passAgain" >
            <el-input
              id="passAgain"
              type="password"
              v-model="ruleForm.checkPassAgain"
              autocomplete="off"
              maxlength="20"
            ></el-input>
          </el-form-item>


          <el-form-item label="验证码:" prop="mobilePass" class="load-item " for="sureCode">

            <el-row :gutter="0">
              <el-col :span="14">
                <el-input v-model.number="ruleForm.mobilePass"
                          id="sureCode"

                          maxlength="6">
                </el-input>
              </el-col>

              <el-col :span="10">
                <el-button type="success"
                           style="margin-left: 0.3rem"
                           @click="getRegisterSureCode"
                           :disabled="isDisableGetCode"

                >{{ruleForm.GetCodeText}}</el-button>
              </el-col>

            </el-row>

          </el-form-item>


          <el-form-item>
            <el-button type="danger"
                       @click="submitRegisterForm('ruleForm')"
                       class="submit-button"
                       :disabled="isDisableButton"
            >注册</el-button>
            <!--          <el-button @click="resetForm('ruleForm')">重置</el-button>-->
          </el-form-item>
        </el-form>

      </div>
  </div>
</template>

<script>
  import { stripscript, validatePass, validateEmail, validateVCode } from '@/utils/validate';
  import NavBar from "../../components/common/navbar/NavBar";
  import {registerUser,getUser} from '../../../src/network/register'

  import  sha1 from 'js-sha1'

  export default {
    components:{
      NavBar

    },
    data() {
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('账号不能为空'));
        } else if(validateEmail(value)){
          callback(new Error('邮箱格式有误'));
        }
        else {
          callback();
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
      var validatePassAgain = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if(value !== this.ruleForm.checkPass){
          callback(new Error('两次密码不一致'));
        } else {
          callback();
          this.isDisableGetCode = false;
        }
      };
      var checkMobilePass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        setTimeout(() => {
          if (validateVCode(value)) {
            callback(new Error('请输入正确验证码'));
          } else {
            callback();
          }
        }, 1000);
      };

      return {
        ruleForm: {
          username: '',
          checkPass: '',
          checkPassAgain:'',
          mobilePass: '',
          GetCodeText:'获取验证码',

        },
        rules: {
          username: [
            { validator: validateUserName, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],

          checkPassAgain: [
            { validator: validatePassAgain, trigger: 'blur' }
          ],
          mobilePass: [
            { validator: checkMobilePass, trigger: 'blur' }
          ]
        },
        isDisableButton:true,
        isDisableGetCode:true,
        registerUserList:[]
      };
    },
    methods: {
      submitRegisterForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const isRegister = this.registerUserList.filter(item => item.username === this.ruleForm.username);
            console.log(isRegister);
            if(isRegister.length !== 0){
              this.$toast.show('该账户已被注册过，请重新输入');
              this.isDisableGetCode = true;
            }else{
              registerUser(this.ruleForm.username,sha1(this.ruleForm.checkPass)).then(res => {
                this.$toast.show('注册成功 去登录吧~');
                this.$router.push('/login');

              })
            }
          } else {
            console.log('error submit!!');
            this.$toast.show('格式有误 请重新输入');
            return false;
          }

        });
      },
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // },

      // 获取注册验证码
      getRegisterSureCode(){
        if(!this.ruleForm.username){
         this.$toast.show('邮箱不能为空',1500);
        }else if(validateEmail(this.ruleForm.username)){
          this.$toast.show('格式有误 请重新填入',1500);

        }
        else if(!this.ruleForm.checkPass){
          this.$toast.show('密码不能为空',1500);
        }else if(!this.ruleForm.checkPassAgain){
          this.$toast.show('确认密码不能为空',1500);



        }else{
          this.$toast.show('成功发送验证码',1500);

          this.isDisableGetCode = true;
          this.timeInterval(60);
        }
      },


      // 验证码计时器
      //点击获取倒计时
      timeInterval(number){
        let timer = number;
        let myInterval = setInterval(() => {
          this.ruleForm.GetCodeText = `发送中${timer}`;
          timer --;
          if(timer === -1){
            this.ruleForm.GetCodeText = '重新发送';
            this.isDisableGetCode = false;
            clearInterval(myInterval);
          }
        },1000)
      },
      // 重置表单
      resetForm() {
        this.$refs['ruleForm'].resetFields();
      }
    },
    activated() {
      console.log('activated');
      this.resetForm();

      //激活发送验证码为不可用
      this.isDisableGetCode = true;

      getUser().then(res => {
        this.registerUserList = res;
      })
    },
    watch: {
      'ruleForm.mobilePass': function (newValue, oldVal) {
        let statusLength = newValue.toString().length;
        if(this.ruleForm.username && this.ruleForm.checkPass && statusLength === 6 ){
          this.isDisableButton = false;
        }else {
          this.isDisableButton = true;
        }
      }
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
    width:30rem;
  }









</style>
