import {request} from "./request";

export function registerUser(username,passWord) {
  return request({
    url:'/userInfo',
    method:'post',
    data:{
      username,
      passWord,
    }

  })
}


