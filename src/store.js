// import { auth } from 'firebase'
import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../src/firebase'
// import getters from './getters'

Vue.use(Vuex)

var cart = window.localStorage.getItem('cart')
var follow = window.localStorage.getItem('follow')
// var check = auth.currentUser.getItem('check')

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    follow: follow ? JSON.parse(follow) : [],
    products: [],
    Artists: []
    // check: check ? JSON.parse(check) : []
  },

  getters: {
    totalPrice: state => {
      let total = 0
      state.cart.filter((item) => {
        total += (item.productPrice * item.productQuantity)
      })

      return total
    },
    productInCart: state => {
      let inCart = 0
      state.cart.filter((item) => {
        inCart += (item.productQuantity)
      })

      return inCart
    }
  },

  mutations: {

    addToCart (state, item) {
      const found = state.cart.find(product => product.productId === item.productId)

      if (found) {
        found.productQuantity++
      } else {
        // state.check.push(item)
        state.cart.push(item)
      }

      this.commit('saveData')
    },
    followArtist (state, person) {
      const found = state.follow.find(Artist => Artist.artistId === person.artistId)
      if (found) {
        // window.alert('already followed')
        console.log('already followed')
        // this.$router.push('/Home')
      } else {
        state.follow.push(person)
      }
      this.commit('saveFollow')
    },
    saveData (state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    saveFollow (state) {
      window.localStorage.setItem('follow', JSON.stringify(state.follow))
    },

    removeFromCart (state, item) {
      const index = state.cart.indexOf(item)
      state.cart.splice(index, 1)

      this.commit('saveData')
    },
    firestore (e) {
      if (this.auth.currentUser) {
        const user = this.auth.currentUser
        return {
          profile: db.collection('profiles').doc(user.uid)
        }
      }
    },
    created () {
      if (this.auth.currentUser) {
        var user = this.auth.currentUser
        this.email = user.email
      }
    }

  }

})
