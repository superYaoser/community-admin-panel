import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect:'/login'
  },
  //  登录注册
  {
    path: '/login',
    name: 'login',
    //按需加载
    component: () => import('../views/LoginRegister.vue')
  },
  //  主页
  {
    path: '/home',
    name: 'home',
    //按需加载
    component: () => import('../views/Home.vue')
  },
  //  全部文章
  {
    path: '/article/all',
    name: 'articleAll',
    //按需加载
    component: () => import('../views/articles/All.vue')
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
