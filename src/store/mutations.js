import {ADD_CONUTER,ADD_SHOPCART} from "./mutations-type";

export  default {
  [ADD_CONUTER](state,payload){
    payload.count ++
  },

  [ADD_SHOPCART](state,payload){
    state.shopCart.push(payload)
  }

}
