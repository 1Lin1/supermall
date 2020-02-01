import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters"

// 1.安装
Vue.use(Vuex)

const state ={
  shopCart:[{id:102,name:'裤子',price:2000,checked:true,count:1}]
}
//2.创建store
const store = new Vuex.Store({
  // 进行vuex重构
  state,
  mutations:mutations,
  actions:actions,
  getters:getters

})

export default  store
