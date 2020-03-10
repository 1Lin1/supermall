import  cookie from 'js-cookie'


export  function setUserName_Token(value) {
  return cookie.set('UserName_Token',value);
}

export  function getUserName_Token() {
  return cookie.get('UserName_Token');
}

export  function removeUserName_Token() {
  return cookie.remove('UserName_Token');
}

export  function setPwd_Token(value) {
  return cookie.set('PassWord_Token',value);
}

export  function getPwd_Token() {
  return cookie.get('PassWord_Token');
}

export  function removePwd_Token() {
  return cookie.remove('PassWord_Token');
}
