import {request} from "./request";

export function getTopImage(type) {
  return request({
    url:'/category',
    params:{
      type:type,
    }
  })
}
