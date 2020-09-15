import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'popper.js'
import firebase from './firebase'
import jQuery from 'jquery'
import Toasted from 'vue-toasted'
window.$ = window.jQuery = jQuery

window.$ = require('jquery')
window.JQuery = require('jquery')

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Toasted, {

  duration: 1000,
  iconPack: 'fontawesome'

})

Vue.component('navbar', require('./components/navbar.vue').default)
Vue.component('homePage', require('./components/homePage.vue').default)
Vue.component('portfolio', require('./components/sections/portfolio.vue').default)
// Vue.component('footerSec', require('./components/footerSec.vue').default)

Vue.prototype.auth = firebase

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
