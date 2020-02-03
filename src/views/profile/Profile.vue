
<!--用于测试axios-->
<template>
  <div>
    <ul v-for="item in users">
      <li>{{item}}</li>
    </ul>

    <form v-on:submit="addUsers">
      <div>
        <label for="id">账户</label>
        <input type="text" id="id" placeholder="id" v-model="customers.id">
      </div>
      <div>
        <label for="name">名字</label>
        <input type="text" id="name" placeholder="name" v-model="customers.name">
      </div>

      <div>
        <label for="phone">电话</label>
        <input type="text" id="phone" placeholder="phone" v-model="customers.phone">
      </div>

      <div>
        <label for="email">邮箱</label>
        <input type="text" id="email" placeholder="email" v-model="customers.email">
      </div>

      <div>
        <label for="companyId">公司id</label>
        <input type="text" id="companyId" placeholder="name" v-model="customers.companyId">
      </div>

      <button >提交</button>

    </form>


    <div>
      <label for="deleteId">删除id</label>
      <input  id="deleteId" type="text" placeholder="请输入要删除的id" v-model="deleteUserId">
      <button @click="insureDelete">确定</button>
    </div>

    <div>
      <label for="selectSingleId">查询单个id</label>
      <input  id="selectSingleId" type="text" placeholder="请输入要查询的id" v-model="selectSingleId">
      <button @click="insureselectSingleId">确定</button>
    </div>

    <div v-show="isSelect">
      <ul v-for="item in singleUsers ">
        <li>{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

  import {getUserData} from "../../network/home";
  import axios from "axios"

  export default {
    name: "Profile",
    data(){
      return{
        users:[],
        singleUsers:[],
        customers:{},
        deleteUserId:'',
        selectSingleId:'',
        isSelect:false,
      }
    },
    created() {
      this.getUserData();
    },
    methods:{
      getUserData(){
        getUserData().then(res =>{
          console.log(res);
          this.users =  res;
        })
      },
      insureselectSingleId(){
        getUserData(this.selectSingleId).then(res => {
          console.log(res);
          if(res.length === 0){
            alert('该用户不存在')
            this.isSelect = false;
          }else{
            this.isSelect = true;

            this.singleUsers = res;
            console.log('成功查询单个用户');

          }

        })
      },
      addUsers(){
        let newCustomer ={
          id:this.customers.id,
          name:this.customers.name,
          phone:this.customers.phone,
          email:this.customers.email,
          companyId:this.customers.companyId,

        }
        // 增加数据
        axios.post("http://localhost:3000/users",newCustomer)
              .then(res =>{
                console.log(res);
                console.log('addUsers');
                console.log(this.customers);
              })

      },
      insureDelete(){
        console.log('insuredeleteid' + this.deleteUserId);
        let url = 'http://localhost:3000/users/' + this.deleteUserId;
        axios.delete(url).then(res =>{
          console.log('成功删除' + res);
          this.getUserData()
        })

      }
    }
  }
</script>

<style scoped>

</style>
