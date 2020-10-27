<template>
  <div>
<navbar></navbar>
<gNav></gNav>
<h1 class="navbar-brand pl-4">Product Details</h1>
<div class="container" v-if="product">
  <div class="row">
    <div class="col-sm-8 cardi bg-white py-3">
      <div class="container">
        <div class="row">
          <div class="col-sm">
          <div v-for="(image, index) in product.productImage" :key="index">
            <img :src="image" class="card-img-top props" alt="...">
          </div>
          </div>
          <div class="col-sm">
            <h4 class="text-center "> <strong>Details</strong></h4>
            <div class="card-body ">
              <h1 class="card-title" style="text-transform:uppercase"> <strong> {{ product.productName}} </strong></h1>
              <p class="card-text" v-html="product.productDescription"></p>
              <h4 class="card-prices">$ {{ product.productPrice}} </h4>
            </div>
            <div class="card-footer bg-transparent ">
              <addToCart
                              :image="getImage(product.productImage)"
                              :name="product.productName"
                              :price="product.productPrice"
                              :p-id="product.id">
                            </addToCart>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">yea</div>
  </div>
</div>
  </div>
</template>

<script>
import { db } from '../../firebase'
export default {
  data () {
    return {

    }
  },
  firestore () {
    return {
      products: db.collection('products')
    }
  },
  computed: {
    product () {
      let match = null
      var productId = this.$route.params.productId
      this.products.forEach(function (product) {
        if (product.id === productId) {
          match = product
        }
      })
      return match
    }
  },
  methods: {
    getImage (images) {
      return images[0]
    }
  }
}
</script>

<style scoped>
.navbar-brand{
    font-size: 2.5rem !important;
    color: gray;
}
.props{
  height: 40vh;
}
@media screen and (min-width: 771px) {
  .imgSize{
    width: 27vw !important;
    height: 40vh !important;
  }
}
.card-footer:hover{
    background-color: orangered;
    color: white !important;
    cursor: pointer;
}
</style>
