import Vue from 'vue'
import VueRouter from "vue-router";
import WeiPinHui from "../views/category/childCpm/WeiPinHui";
import NanZhuang from "../views/category/childCpm/NanZhuang";
import NvZhuang from "../views/category/childCpm/NvZhuang";
import NanXie from "../views/category/childCpm/NanXie";
import NvXie from "../views/category/childCpm/NvXie";
import Phone from "../views/category/childCpm/Phone";
import Computer from "../views/category/childCpm/Computer";
import HomePower from "../views/category/childCpm/HomePower";
import Food from "../views/category/childCpm/Food";
import Drink from "../views/category/childCpm/Drink";
import Baby from "../views/category/childCpm/Baby";
import Medicine from "../views/category/childCpm/Medicine";
import Sport from "../views/category/childCpm/Sport";
import Restaurant from "../views/category/childCpm/Restaurant";
import Flower from "../views/category/childCpm/Flower";
import Pet from "../views/category/childCpm/Pet";

Vue.use(VueRouter)

// 解决详情页推荐router冲突
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 使用路由懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shopcart = () => import('../views/shopcart/Shopcart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/category',
    component: Category,
    redirect:'/category/weipinhui',
    children:[

      {
        path:'weipinhui',
        component:WeiPinHui,
      },
      {
        path:'nanzhuang',
        component:NanZhuang,
      },
      {
        path:'nvzhuang',
        component:NvZhuang,
      },
      {
        path:'nanxie',
        component:NanXie,
      },
      {
        path:'nvxie',
        component:NvXie,
      },
      {
        path:'phone',
        component:Phone,
      },
      {
        path:'computer',
        component:Computer,
      },
      {
        path:'homepower',
        component:HomePower,
      },
      {
        path:'food',
        component:Food,
      },
      {
        path:'drink',
        component:Drink,
      },
      {
        path:'baby',
        component:Baby,
      },
      {
        path:'medicine',
        component:Medicine,
      },
      {
        path:'sport',
        component:Sport,
      },
      {
        path:'restaurant',
        component:Restaurant,
      },
      {
        path:'flower',
        component:Flower,
      },
      {
        path:'pet',
        component:Pet,
      },
    ]
  },
  {
    path:'/shopcart',
    component: Shopcart
  },
  {
    path:'/profile',
    component: Profile
  },
  {
    path:'/detail',
    component: Detail
  },

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export  default  router
