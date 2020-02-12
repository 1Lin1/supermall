import {ADD_CONUTER,ADD_SHOPCART} from "./mutations-type";

export  default {
  [ADD_CONUTER](state,payload){
    payload.count ++
  },

  [ADD_SHOPCART](state,payload){
    payload.checked = true
    state.shopCart.push(payload)
  },

  ADD_CFav(state, payload) {
    payload.cfav ++ ;
  },



}
