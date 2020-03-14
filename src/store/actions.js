import {ADD_CONUTER,ADD_SHOPCART,PROD_CONUTER} from "./mutations-type";
import store from "./index";

export  default {
  addCart(context,payload){
    return new Promise((resolve,reject) => {
      // 1.第一种查找方法
      //   let oldProduct = null;
      //   context.state.shopCart.forEach(item =>{
      //     if(item.pid === payload.pid){
      //       oldProduct = item;
      //     }
      //   })
      //   2.find加箭头函数 找到对象 注意箭头函数的写法
      let oldProduct = context.state.shopCart.find(item => item.pid === payload.pid);
      //判断oldProduct

      if(oldProduct){
        // oldProduct.count += 1
        context.commit(ADD_CONUTER,oldProduct)
        resolve('商品数量加1~')
      }else {
        payload.count = 1;
        // context.state.shopCart.push(payload)c
        context.commit(ADD_SHOPCART,payload)
        resolve('加入购物车成功~')

      }
      }
    )

  },
  prodCart(context,payload){
    return new Promise((resolve,reject) => {

      //   2.find加箭头函数 找到对象 注意箭头函数的写法
      let oldProduct = context.state.shopCart.find(item => item.pid === payload.pid);
      //判断oldProduct

      if(oldProduct){
        // oldProduct.count += 1
        context.commit(PROD_CONUTER,oldProduct)
        resolve('商品数量减1~')
      }
      }
    )

  },

  addCfav(context,payload){
    return new Promise(resolve =>{
      let oldProduct = context.state.shopCart.find(item => item.pid === payload.pid);

      if(!oldProduct){
        resolve({
          message:'请先加入购物车~~'
        })
      }else{
        context.commit('ADD_CFav',oldProduct);
        console.log(oldProduct);
        resolve({
          message:'收藏数量+1~',
          oldProduct:oldProduct,
        })
      }

    })
  },

  // 移出购物车
  removeShop(context,payload){
    return new Promise(resolve =>{
      console.log(payload);

      context.commit('REMOVE_SHOP',payload);
      resolve('移出购物车成功~~')

    }).catch(err =>{
      console.log(err);
    })

  },

  // 处理cookie相关
  addPwd_Token(context,payload){
    return new Promise((resolve,reject) => {
      if(payload === ''){
        context.commit('setPwd_Token',payload);
        resolve('成功退出')
      }else{
        context.commit('setPwd_Token',payload);
      }
    })
  },
  addUserName_Token(context,payload){
    context.commit('setUserName_Token',payload)
  },

  // 处理登录状态
  changeUserLoadStatus(context,payload){
    context.commit('setUserLoadStatus',payload)
  },

  //修改当前余额
  setCurrentMoney(context,payload){
    return new Promise((resolve,reject) => {
      context.commit('setCurrentMoney',payload)
      resolve('结算成功')
    })

  }
}
