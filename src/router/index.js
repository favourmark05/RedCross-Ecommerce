import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import dashboard from '../components/Adminboard/dashboard.vue'
import product from '../components/Adminboard/product.vue'
import sales from '../components/Adminboard/sales.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
      },
      {
        path: '/product',
        name: 'product',
        component: product
      },
      {
        path: '/sales',
        name: 'sales',
        component: sales
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/authen',
    name: 'Authen',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Authen.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
