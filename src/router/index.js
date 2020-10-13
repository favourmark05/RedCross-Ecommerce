import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import sideBar from '../components/Gallery/sideBar.vue'
import dashboard from '../components/Adminboard/dashboard.vue'
import product from '../components/Adminboard/product.vue'
import userProfiles from '../components/Adminboard/userProfiles.vue'
import sales from '../components/Adminboard/sales.vue'
import firebase from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/sideBar',
    name: 'sideBar',
    component: sideBar,
    children: []
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: { requiresAuth: true },
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
        path: '/userProfiles',
        name: 'userProfiles',
        component: userProfiles
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
  },
  {
    path: '/homePage',
    name: 'homePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/contactUs.vue')
  },
  {
    path: '/reset',
    name: 'reset',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/sections/reset.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.currentUser

  if (requiresAuth && !currentUser) {
    next({
      path: '/Authen',
      query: { redirect: to.fullPath }
    })
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router
