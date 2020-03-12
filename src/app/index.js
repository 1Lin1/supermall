import  cookie from 'js-cookie'


//添加购物车
export  function setShopCartList(value) {
  cookie.set('addShopCartList',JSON.stringify(value),{expires:7});
}

export  function  getShopCartList() {
  return cookie.getJSON('addShopCartList');
}

export function removeSingleShopCartCookie(pid) {

  let currentShopCart = getShopCartList();
  currentShopCart.forEach((item,index) =>{

    if(item.pid === pid){
      currentShopCart.splice(index,1);
      setShopCartList(currentShopCart);
    }
  })
}

export  function setUserName_Token(value) {
  return cookie.set('UserName_Token',value, { expires: 7 });
}

export  function getUserName_Token() {
  return cookie.get('UserName_Token');
}

export  function removeUserName_Token() {
  return cookie.remove('UserName_Token');
}

export  function setPwd_Token(value) {
  return cookie.set('PassWord_Token',value, { expires: 7 });
}

export  function getPwd_Token() {
  return cookie.get('PassWord_Token');
}

export  function removePwd_Token() {
  return cookie.remove('PassWord_Token');
}

export  function setMoney_Token(value) {
  return cookie.set('Money_Token',value, { expires: 7 });
}

export  function getMoney_Token() {
  return cookie.get('Money_Token');
}
