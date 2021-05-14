import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Payments from '@/views/Payments.vue'
import Terminals from '@/views/Terminals.vue'
import Loanees from '@/views/Loanees.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/dashboard',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { layout: "base" }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
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
        path: '/loanees',
        name: 'Loanees',
        component: Loanees
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router