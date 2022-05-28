// import { createWebHistory } from 'node_modules/vue-router/dist/vue-router'
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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router