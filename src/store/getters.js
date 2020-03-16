export  default {
  CartLength(state){
    return state.shopCart.length;
  },
  CartList(state){
    return state.shopCart;
  },
  isUserLoad(state){
    return state.isUserLoad;
  },

  //获取当前余额
  getCurrentMoney(state){
    return state.currentMoney;
  },
  getterPwd_Token(state){
    return state.pass_token
  },

  getterUserName_Token(state){
    return state.userName_token;
  }

}
