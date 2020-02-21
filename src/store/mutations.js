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
  }



}
