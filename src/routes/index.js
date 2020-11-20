import VueRouter from "vue-router"
import Vue from "vue"
import config from "./config"
  //安装
  Vue.use(VueRouter)
  //配置路由对象
  var router = new VueRouter(config)  
  export default router; //配置路由对象到Vue实例中