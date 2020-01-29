import {request} from "./request";

//
// export function getMySqlData() {
//   return request({
//     url:'/t1/customer'
//   })
// }
export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
     url:'/home/data',
     params:{
       type,
       page,
     }

  })
}
