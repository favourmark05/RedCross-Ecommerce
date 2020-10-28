import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import admin from '../views/admin.vue'
import userDashboard from '../views/userDashboard.vue'
import sideBar from '../components/Gallery/sideBar.vue'
import productPreview from '../components/Gallery/productPreview.vue'
import dashboard from '../components/users/dashboard.vue'
import product from '../components/Admin/product.vue'
import userProfiles from '../components/users/userProfiles.vue'
// import updateProfiles from '../components/Admin/updateProfiles.vue'
import sales from '../components/Admin/sales.vue'
import firebase from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
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
    component: admin,
    meta: { requiresAuth: true },
    children: [
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
    path: '/userDashboard',
    name: 'userDashboard',
    component: userDashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
      },
      {
        path: '/userProfiles',
        name: 'userProfiles',
        component: userProfiles
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
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Authentication/login.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Authentication/signUp.vue')
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/contactUs.vue')
  },
  {
    path: '/reset',
    name: 'reset',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Authentication/reset.vue')
  },
  {
    path: '/cartPreview',
    name: 'cartPreview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/cart/cartPreview.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/cart/checkout.vue')
  },
  // {
  //   path: '/productPreview',
  //   name: 'productPreview',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/Gallery/productPreview.vue')
  // },
  { path: '/productPreview/:productId', name: 'productPreview', component: productPreview }
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
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router
