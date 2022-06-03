import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: () => import('../Page/Home.vue')
  },
  {
    path: '/blog/',
    name: 'blog-home',
    component: () => import('../Blog/BlogHome.vue') 
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import('../Blog/BlogPost.vue')
      },
  {
    path: '/about',
    name: 'AboutIndex',
    component: () => import('../Page/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
