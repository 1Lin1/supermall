import {ADD_CONUTER,ADD_SHOPCART} from "./mutations-type";

export  default {
  addCart(context,payload){
    return new Promise((resolve,reject) => {
      // 1.第一种查找方法
      //   let oldProduct = null;
      //   for(let item in state.shopCart){
      //     if (item.id === payload.id){
      //       oldProduct = item;
      //     }
      //   }
      //   2.find加箭头函数 找到对象 注意箭头函数的写法
      let oldProduct = context.state.shopCart.find(item => item.pid === payload.pid)
      //判断oldProduct

      if(oldProduct){
        // oldProduct.count += 1
        context.commit(ADD_CONUTER,oldProduct)
        resolve('商品数量加1~')
      }else {
        payload.count = 1
        // context.state.shopCart.push(payload)c
        context.commit(ADD_SHOPCART,payload)
        resolve('加入购物车成功~')

      }
      }
    )

  },

  addCfav(context,payload){
    return new Promise(resolve =>{
      let oldProduct = context.state.shopCart.find(item => item.pid === payload.pid);

      context.commit('ADD_CFav',oldProduct);
      console.log(oldProduct);
      resolve({
        message:'收藏数量+1~',
        oldProduct:oldProduct,
      })
    })
  }

}
