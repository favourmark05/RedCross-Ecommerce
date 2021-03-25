import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import admin from '../views/admin.vue'
import community from '../views/community.vue'
import userDashboard from '../views/userDashboard.vue'
import sideBar from '../components/Gallery/sideBar.vue'
import productPreview from '../components/Gallery/productPreview.vue'
import person from '../components/Gallery/person.vue'
import street from '../components/Gallery/street.vue'
import GeneralChat from '../components/Chats/GeneralChat.vue'
import visual from '../components/Chats/visual.vue'
import paint from '../components/Chats/paint.vue'
import decorative from '../components/Chats/decorative.vue'
import craft from '../components/Chats/craft.vue'
import nature from '../components/Gallery/nature.vue'
import allProduct from '../components/Gallery/allProduct.vue'
import dashboard from '../components/users/dashboard.vue'
import product from '../components/Admin/product.vue'
import addPerson from '../components/Admin/addPerson.vue'
import addNature from '../components/Admin/addNature.vue'
import addStreet from '../components/Admin/addStreet.vue'
import userProfiles from '../components/users/userProfiles.vue'
import followedArtist from '../components/users/followedArtist.vue'
import sales from '../components/Admin/sales.vue'
import artist from '../components/Admin/artist.vue'
import ArtistPreview from '../components/pages/ArtistPreview.vue'
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
    children: [
      {
        path: '/person',
        name: 'person',
        component: person
      },
      {
        path: '/street',
        name: 'street',
        component: street
      },
      {
        path: '/nature',
        name: 'nature',
        component: nature
      },
      {
        path: '/allProduct',
        name: 'allProduct',
        component: allProduct
      }
    ]
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
      },
      {
        path: '/artist',
        name: 'artist',
        component: artist
      },
      {
        path: '/addPerson',
        name: 'addPerson',
        component: addPerson
      },
      {
        path: '/addNature',
        name: 'addNature',
        component: addNature
      },
      {
        path: '/addStreet',
        name: 'addStreet',
        component: addStreet
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
      },
      {
        path: '/followedArtist',
        name: 'followedArtist',
        component: followedArtist
      }
    ]
  },
  {
    path: '/community',
    name: 'community',
    component: community,
    meta: { requiresAuth: true },
    props: true,
    // beforeEnter: (to, from, next) => {
    //   if (to.profile.fullName) {
    //     next()
    //   }
    // },
    children: [
      {
        path: '/GeneralChat',
        name: 'GeneralChat',
        component: GeneralChat
      },
      {
        path: '/craft',
        name: 'craft',
        component: craft
      },
      {
        path: '/decorative',
        name: 'decorative',
        component: decorative
      },
      {
        path: '/visual',
        name: 'visual',
        component: visual
      },
      {
        path: '/paint',
        name: 'paint',
        component: paint
      }
    ]
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
    path: '/aboutUs',
    name: 'aboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/aboutUs.vue')
  },
  {
    path: '/ourArtist',
    name: 'ourArtist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/ourArtist.vue')
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
    path: '/artistSignUp',
    name: 'artistSignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Artist/Auth/artistSignUp.vue')
  },
  {
    path: '/artistLogin',
    name: 'artistLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Artist/Auth/artistLogin.vue')
  },
  {
    path: '/resetArtist',
    name: 'resetArtist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Artist/Auth/resetArtist.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/cart/checkout.vue')
  },
  { path: '/productPreview/:productId', name: 'productPreview', component: productPreview },
  { path: '/ArtistPreview/:ArtistId', name: 'ArtistPreview', component: ArtistPreview }
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
