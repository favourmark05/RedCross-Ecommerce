import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'popper.js'
import firebase from './firebase'
import Toasted from 'vue-toasted'
import Swal from 'sweetalert2'
import VueFirestore from 'vue-firestore'
import jQuery from 'jquery'
import store from './store'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)

Vue.use(VueFirestore, {
  key: 'id', // the name of the property. Default is '.key'.
  enumerable: true //  whether it is enumerable or not. Default is true.
})

window.Swal = Swal

window.$ = window.jQuery = jQuery

window.$ = require('jquery')
window.JQuery = require('jquery')
Vue.use(VueFirestore)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Toasted, {

  duration: 1000,
  iconPack: 'fontawesome'

})

Vue.component('navbar', require('./components/navbar.vue').default)
Vue.component('addToCart', require('./components/cart/addToCart.vue').default)
Vue.component('followArtist', require('./components/pages/followArtist.vue').default)
Vue.component('gNav', require('./components/Gallery/gNav.vue').default)
Vue.component('productPreview', require('./components/Gallery/productPreview.vue').default)
Vue.component('portfolio', require('./components/landingPage/portfolio.vue').default)
Vue.component('footerSec', require('./components/footerSec.vue').default)

Vue.prototype.auth = firebase

Vue.config.productionTip = false

const app = ''

firebase.onAuthStateChanged((user) => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
