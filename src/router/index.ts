import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        redirect: '/login'
    },
    //  登录注册
    {
        path: '/login',
        name: 'login',
        //按需加载
        component: () => import('../views/LoginRegister.vue')
    },
    //admin操作面板
    {
        path: '/admin',
        name:'admin',
        component: () => import('../views/Admin.vue'),
        children: [
            //主页
            {
                path: 'home',
                component: () => import('../views/Home.vue'),
                meta: {
                    parentView: 'childView'
                }
            },
            {
                path: 'article/all',
                component: () => import('../views/articles/All.vue'),
                meta: {
                    parentView: 'childView'
                }
            },
        ]
    },
    //  404
    {
        path: '/:catchAll(.*)',
        name: '404',
        //按需加载
        component: () => import('../views/404.vue')
    },
]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});
// 全局路由守卫
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.getItem('token')
    if (to.name !== 'login' && !isLogin) {
        // 如果用户未登录且不是登录页，则跳转到登录页
        next({name: 'login'})
    } else {
        next()
    }
})

export default router
