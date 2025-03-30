import {createRouter, createWebHashHistory} from 'vue-router'
import {constantRoute} from "@/router/routes.ts";

let router = createRouter({
    //用hash模式
    history: createWebHashHistory(),
    routes: constantRoute,
    scrollBehavior(){
        //滚动行为，改变路由滚动条回到初始位置
        return {
            left: 0,
            top: 0
        }
    }
})

export default router