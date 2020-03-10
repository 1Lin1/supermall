import router from "./index";
import {getPwd_Token,getUserName_Token,removePwd_Token,removeUserName_Token} from "../app/index";
import store from '../store/index'

// 路由白名单
const whiteRouter = ['/home'];

router.beforeEach((to,from,next )=> {

  if(getPwd_Token() && getUserName_Token ){
    if(to.path === '/login'){
      // 清除cookie的token
      removePwd_Token();
      removeUserName_Token();

      //清除vuex 的token
      store.commit('setPwd_Token','');
      store.commit('setUserName_Token','');
      store.dispatch('changeUserLoadStatus',false);
      next();
    }else{
      store.commit('setUserName_Token',getUserName_Token());
      store.state.isUserLoad = true;
      next();
    }
  }else{


    if(whiteRouter.indexOf(to.path) === -1){
      next(); //不执行before
    }else{
      next('/login') //继续执行before
    }
  }

//  1.一开始未登录 token不存在 /home的路径不符合 跳回login
//  2.此时 第二次调到login 符合 停止执行before
//  3.登陆后 token存在 也就不死循环执行before

})
