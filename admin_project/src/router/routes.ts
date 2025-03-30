//对外暴露的路由配置（常量路由）
export const constantRoute = [
    //登录
    {
        path: '/login',
        component: () => import('@/views/longin.vue'),
        name: 'login'
    },
    //登录成功以后展示的路由
    {
        path: '/',
        component: () => import('@/views/home.vue'),
        name: 'home'
    },

    {
        path: '/404',
        component: () => import('@/views/404.vue'),
        name: '404'
    },

    //上面都未匹配到时，匹配这个，重定向到404
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any'
    }
]