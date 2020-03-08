import {request} from "./request";

export function loadUser(username,passWord) {
  return request({
    url:'/userInfo',
    method:'get',
    params:{
      username:username,
      passWord:passWord
    }

  })
}


