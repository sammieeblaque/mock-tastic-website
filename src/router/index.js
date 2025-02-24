import About from '@/components/About.vue'
import Home from '@/components/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/What we do',
      name: 'about',
      component: About
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'mooth',
      }
    } else {
      return { top: 0 }
    }
  },
})

export default router
