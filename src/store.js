import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters'

Vue.use(Vuex)

var cart = window.localStorage.getItem('cart')

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    products: []
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
        state.cart.push(item)
      }

      this.commit('saveData')
    },

    saveData (state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    removeFromCart (state, item) {
      const index = state.cart.indexOf(item)
      state.cart.splice(index, 1)

      this.commit('saveData')
    }

  }

})
