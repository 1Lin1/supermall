import {request} from "./request";

//
// export function getMySqlData() {
//   return request({
//     url:'/t1/customer'
//   })
// }
export function getHomeMultidata() {
  return request({
    url:'/data'
  })
}
export function getUserData(id) {
  return request({
    url:'/users',
    params:{
      id
    }
  })
}



export function getHomeGoods(type) {
  return request({
     url:'/goodsList',
     method:'get',
     params:{
       type
     }

  })
}
