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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
