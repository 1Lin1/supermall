import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import toast from 'components/common/Toast'
import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入全局导航守卫
import './router/guard.js'

Vue.config.productionTip = false
Vue.use(ElementUI);

//安装toast插件
Vue.use(toast);
// 解决移动端300ms延迟
FastClick.attach(document.body);

// 使用图片懒加载
Vue.use(VueLazyload,{
  loading:require('./assets/img/common/collect.svg')
})

// 全局组件
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
