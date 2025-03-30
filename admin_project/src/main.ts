import { createApp } from 'vue'
import App from '@/App.vue'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//配置element-plus国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//配置svg插件
import 'virtual:svg-icons-register'
//引入全局样式
import '@/styles/index.scss'
//引入路由
import router from "@/router";



/**
 * 测试mock
 *
import axios from 'axios'
axios({
  url:'/api/user/login',
  method:'post',
  data:{
    username: 'admin',
    password: '111111'
  }
})

import request from "@/utils/request.ts";
request.post('/user/login',{
  username: 'admin',
      password: '111111'
})
*/

const app = createApp(App)


  /**
   * 注册图标组件为全局组件，注意这里的组件是以组件标签的形式使用如 <Search />   <el-icon><Search /></el-icon>
   * 就是说例如button :icon='Search' 这里面的Search组件使用时需要在vue文件中再次引入，注册
   * 如：
   * 先 import {Search} from '@element-plus/icons-vue'
   * 再 <el-button type="primary" :icon="Search">小小樱</el-button>
   * 或者写成字符串如
   *   el-button type="primary" icon="Search">小小樱</el-button> //无需引入注册组件，icon不使用:（v-bind）
   */
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.use(ElementPlus, {
    locale: zhCn,//设置element-plus使用中文
  })

  //引入svg组件
  //import SvgIcon from '@/components/SvgIcon.vue'
  //注册svg为全局组件
  //app.component('SvgIcon', SvgIcon)
  //改用插件方式注册多个全局组件
  import  globalComponents  from '@/components/index.ts';
  //注册路由
app.use(router);
app.use(globalComponents)
app.mount('#app')
