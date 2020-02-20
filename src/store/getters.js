export  default {
  CartLength(state){
    return  state.shopCart.length;
  },
  CartList(state){
    return state.shopCart;
  },
  isUserLoad(state){
    return state.isUserLoad;
  }

}
