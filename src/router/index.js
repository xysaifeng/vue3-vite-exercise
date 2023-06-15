// import { createWebHistory } from 'node_modules/vue-router/dist/vue-router'
import { useUserStore } from '@/store/user'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/custom-emit',
    name: 'CustomEmit',
    component: () => import('@/views/CustomEmit.vue')
  },
  {
    path: '/sheet',
    name: 'Sheet',
    component: () => import('@/views/Sheet.vue')
  },
  {
    path: '/scss-demo',
    name: 'ScssDemo',
    component: () => import('@/views/ScssDemo/index.vue')
  },
  {
    path: '/testState',
    name: 'TestState',
    component: () => import('@/views/TestState.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/Form/index.vue')
  },
  {
    path: '/compressFile',
    name: 'CompressFile',
    component: () => import('@/views/CompressFile/index.vue')
  },
  {
    path: '/storage',
    name: 'Storage',
    component: () => import('@/views/Storage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// store使用位置
// 需确保在 pinia 激活使用后（ app.use(createPinia()) ）才能使用 useStore()
// 如在路由守卫中

// 报错
// const userStore = useUserStore()

router.beforeEach((to) => {
  // // 正常使用
  const userStore = useUserStore()
  // console.log('userStore: ', userStore);
})

export default router