import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { clearPending } from '/@/utils/request'

// 路由配置 和以前一样
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      type: 'home'
    },
    component: () => import('/@/views/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      type: 'login'
    },
    component: () => import('/@/views/login.vue')
  },
  {
    path: '/:pathMatch(.*)*', // 注意此处 404页面匹配规则和以前不相同，得采用这种配置方式才行
    name: '404',
    component: () => import('/@/views/404.vue')
  }
]

// 此处由【new VueRouter】的方式修改为【createRouter】的方式 其余无变化
const router = createRouter({
  history: createWebHashHistory(), //路由模式的配置采用API调用的方式 不再是之前的字符串 此处采用的hash路由
  routes
})

router.beforeEach((to: any, from: any, next: () => void) => {
  //在跳转路由之前，先清除所有的请求
  clearPending()
  next()
})

export default router
