<template>
    <div>
        <navbar></navbar>
        <h1 class="navbar-brand pl-4 pt-5">Shop Cart</h1>
        <div class="container pt-3">
            <!-- <router-link to="sideBar" class="table-router">CONTINUE SHOPPING</router-link> -->
        </div>
        <div class="container py-5">
            <div class="row">
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
                </div>
                <div class="col-sm">
                    <h6 class="text-white text-center">ENTER CARD DETAILS </h6>
                    <div class="float-right pt-2">
                        <img src="../../assets/images/card.png" class="AtmCard">
                        <card class='stripe-card '
                        :class='{ complete }'
                        stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
                        :options='stripeOptions'
                        @change='complete = $event.complete'
                        />
                    <button class='pay-with-stripe btn btn-primary mt-4' @click='pay' :disabled='!complete'>Pay with card</button>
                    </div>
                </div>
            </div>
        </div>
        <footerSec></footerSec>
    </div>
</template>

<script>
// import { stripeKey, stripeOptions } from './stripeConfig.json'
import { Card, createToken } from 'vue-stripe-elements-plus'

export default {
  data () {
    return {
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    }
  },

  components: { Card },

  methods: {
    pay () {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => console.log(data.token))
    }
  }
}
</script>

<style>
.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
.AtmCard{
    height: 10rem !important;
}
</style>
