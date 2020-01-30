import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装
Vue.use(Vuex)

//2.创建store
const store = new Vuex.Store({
  state:{
      shopCart:[]
  },
  mutations:{
    addCart(state,payload){
    // 1.第一种查找方法
    //   let oldProduct = null;
    //   for(let item in state.shopCart){
    //     if (item.id === payload.id){
    //       oldProduct = item;
    //     }
    //   }
    //   2.find加箭头函数 找到对象 注意箭头函数的写法
      let oldProduct = state.shopCart.find(item => item.id === payload.id)
      //判断oldProduct

      if(oldProduct){
        oldProduct.count += 1
      }else {
        payload.count = 1
        state.shopCart.push(payload)
      }

    }
  },

})

export default  store
