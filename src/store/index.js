import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";

// 1.安装
Vue.use(Vuex)

const state ={
  shopCart:[]
}
//2.创建store
const store = new Vuex.Store({
  // 进行vuex重构
  state,
  mutations:mutations,
  actions:actions

})

export default  store
