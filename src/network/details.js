import {request} from "./request";

export function getDetailData(pid) {
  return request({
    url:'/details',
    params:{
      pid
    }
  })
}

// 封装思想 把想要的东西封装成一个对象类 面向对象开发
export class Goods {
  constructor(itemInfo) {
    this.title = itemInfo.title;
    this.newPrice = itemInfo.newPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.descmessage = itemInfo.descmessage;
    this.cfav = itemInfo.cfav;
    this.saleMan = itemInfo.saleMan;
    this.company = itemInfo.company;
    this.saleManPhone = itemInfo.saleManPhone;
    this.shopName = itemInfo.shopName;
  }
}
