import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters"

// 1.安装
Vue.use(Vuex)


const moduleA = {
    state: {
        name: 'mike'
    },
    actions: {
      updateName(context,payload){
        setTimeout(() => {
          context.commit('updateNameMt',payload)
        },1000)
      }
    },
    mutations: {
      updateNameMt(state,payload){
        state.name = payload;
      }
    },
    getters: {
      fullName(state){
        return state.name + '111'
      },
      fullName2(state,getters){
        return getters.fullName + '2222'
      },
      fullName3(state,getters,rootState){
        return getters.fullName2 + rootState.currentMoney
      }
    }
}
const state = {
        shopCart: [],
        currentMoney: 10000,
        isUserLoad: false,
        pass_token: '',
        userName_token: '',
    }
    //2.创建store
const store = new Vuex.Store({
    // 进行vuex重构
    state,
    mutations: mutations,
    actions: actions,
    getters: getters,
    modules: {
        a: moduleA
    }

})

export default store
