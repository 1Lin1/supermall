import Vue from 'vue'
import VueRouter from "vue-router";


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

const WeiPinHui = () => import('../views/category/childCpm/WeiPinHui')
const NanZhuang = () => import('../views/category/childCpm/NanZhuang')
const NvZhuang = () => import('../views/category/childCpm/NvZhuang')
const NanXie = () => import('../views/category/childCpm/NanXie')
const NvXie = () => import('../views/category/childCpm/NvXie')
const Phone = () => import('../views/category/childCpm/Phone')
const Computer = () => import('../views/category/childCpm/Computer')
const Food = () => import('../views/category/childCpm/Food')
const Drink = () => import('../views/category/childCpm/Drink')
const Baby = () => import('../views/category/childCpm/Baby')
const Medicine = () => import('../views/category/childCpm/Medicine')
const Sport = () => import('../views/category/childCpm/Sport')
const Restaurant = () => import('../views/category/childCpm/Restaurant')
const Flower = () => import('../views/category/childCpm/Flower')
const JiaJu = () => import('../views/category/childCpm/JiaJu')
const PowerHome = () => import('../views/category/childCpm/PowerHome')
const UserLoad = () => import('../views/userload/UserLoad')


const Login = () => import('../views/userload/Login')
const Register = () => import('../views/userload/Register')



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
    children:[
      {
        // 默认重定向
        path:'',
        redirect:'weipinhui'
      },
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
        path:'powerhome',
        component:PowerHome,
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
        path:'jiaju',
        component:JiaJu,
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
  {
    path:'/userload',
    component: UserLoad
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/register',
    component: Register
  },

]

const router = new VueRouter({
  routes,
  mode:'history'
})



export  default  router
