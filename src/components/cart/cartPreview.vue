<template>
    <div class="cartPreview">
        <navbar></navbar>
        <gNav></gNav>
        <h1 class="navbar-brand pl-4">Shop Cart</h1>
        <div class="container pt-3">
            <table class="table table-dark">
                    <thead>
                        <tr class="text-center">
                        <!-- <th scope="col">#</th> -->
                        <th scope="col" class="thead">Image</th>
                        <th scope="col" class="thead">Product</th>
                        <th scope="col" class="thead">Price</th>
                        <th scope="col" class="thead">Quantity</th>
                        <th scope="col" class="thead">Total</th>
                        <th scope="col" class="thead">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in this.$store.state.cart" :key="index" class="text-center">
                        <!-- <th scope="row">1</th> -->
                        <td>
                            <img :src="item.productImage" alt="" srcset="" class="itemImage">
                        </td>
                        <td class="tdata"> {{ item.productName }} </td>
                        <td class="tdata"> ${{ item.productPrice }} </td>
                        <td class="tdata"> {{ item.productQuantity }}
                            <!-- <input type="number" v-model="item.productQuantity" step="1" value="1" min="1" class="text-center"> -->
                        </td>
                        <td class="tdata"> ${{ item.productPrice * item.productQuantity }} </td>
                        <td class="tdata">
                            <span @click="$store.commit('removeFromCart', item)">&times;</span>
                        </td>
                        </tr>
                    </tbody>
            </table>
            <router-link to="sidebar" class="table-router">CONTINUE SHOPPING</router-link>
        </div>
        <div class="container py-5">
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm">
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                            <th scope="col">CART TOTAL</th>
                            <td> ${{ this.$store.getters.totalPrice }} </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="col">SHIPPING</th>
                            <td> ${{ 50 }} </td>
                            </tr>
                            <tr>
                            <th scope="col">ORDER PRICE TOTAL</th>
                            <td>${{ this.$store.getters.totalPrice + 50 }} </td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="float-right table-router" @click="checkOut" :disabled="true">CHECKOUT</button>
                </div>
            </div>
        </div>
        <footerSec></footerSec>
    </div>
</template>

<script>
// import { db } from '../firebase'
export default {
  name: 'cartPreview',
  data () {
    return {

    }
  },
  methods: {
    checkOut () {
      if (!this.auth.currentUser) {
        this.$router.push('/login')
        this.$toasted.info('login to continue to checkout', { icon: { name: 'fa-exclamation-triangle' } })
      } else {
        this.$router.push('/checkOut')
      }
    }
    // removeItem () {
    // }
  }
}
</script>

<style scoped>
.nav-link{
    color: rgb(138, 129, 129) !important;
    padding: 0 20px !important;
}
.fa-bars{
    color: white !important;
}
.galleryNavBar{
    padding-top:5rem;
}
.navbar-brand{
    font-size: 2.5rem !important;
    color: gray;
}
.table-router{
    text-decoration: none;
    color: gray;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.table-router:hover{
    color: white;
    background-color: gray;
    /* border-radius: 30%; */
    padding: 4px 4px;
}
.itemImage{
    height: 6rem;
    width: 6rem;
}
.tdata{
    /* padding: 3rem 0px; */
    text-align: center !important;
    padding-top: 3rem;
}
.spec{
    /* padding: 0rem 2rem 0rem 0rem; */
    /* justify-content: center !important; */
    text-align: center !important;
}
.tdata > span {
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bolder;
}
.tdata > span:hover {
    color: rgb(168, 12, 12);
    background-color: white;
    padding: 0.3rem 0.5rem;
    border-radius: 30%;
    transition: ease;
}
</style>
