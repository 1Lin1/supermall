import {ADD_CONUTER,ADD_SHOPCART} from "./mutations-type";
import  Vue from 'vue'

export  default {
  [ADD_CONUTER](state,payload){
    payload.count ++;
  },

  [ADD_SHOPCART](state,payload){
    payload.checked = true;
    state.shopCart.push(payload);
  },

  ADD_CFav(state, payload) {
    payload.cfav ++ ;
  },

  REMOVE_SHOP(state,id){
    // Vue.delete(state.shopCart,payload);
    state.shopCart.forEach((item,index) =>{
      if(item.pid === id){
        state.shopCart.splice(index,1);
      }
    })
    console.log('delete' + id);
  },

  setPwd_Token(state,payload){
    state.pass_token = payload;
  },
  setUserName_Token(state,payload){
    state.userName_token = payload;
  },


  // 处理登录状态
  setUserLoadStatus(state,value){
    state.isUserLoad = value;
  },


  //改变余额
  setCurrentMoney(state,value){
    state.currentMoney = value;
  }



}
