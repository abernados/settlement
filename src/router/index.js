import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Payments from '../views/Payments.vue'
import Terminals from '../views/Terminals.vue'

const routes = [
  {
    path: '/',  // LOGIN ITO PAM AH
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Home',
    component: Home
  },
  {
    path: '/payments',
    name: 'Payments',
    component: Payments
  },
  {
    path: '/terminals',
    name: 'Terminals',
    component: Terminals
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
