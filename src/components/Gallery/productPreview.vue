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
            <div class="card-body ">
              <h1 class="card-title" style="text-transform:uppercase"> <strong> {{ product.productName}} </strong></h1>
              <!-- <p class="card-text" v-html="product.productDescription"></p> -->
              <h4 class="card-prices">$ {{ product.productPrice}} </h4>
            </div>
            <div class="card-footer ">
              <addToCart
                              :image="getImage(product.productImage)"
                              :name="product.productName"
                              :price="product.productPrice"
                              :p-id="product.id"
                              :tags="product.productTags">
              </addToCart>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
                <div class="card col-sm my-3  ml-3">
                  <div class="card-body">
                    <h5 class="card-title">Artist Details</h5>
                    <hr>
                    <h6><b> Name: </b> {{  }} </h6>
                    <h6><b> Country: </b> {{  }} </h6>
                  </div>
                </div>
    </div>
  </div>
</div>
<div class="container my-5 bg-white" v-if="product">
  <div class="row ">
    <div class="col px-3">
      <h4 class="text-left pt-2"> <strong>Product Details</strong></h4>
      <hr>
      <p class="card-text" v-html="product.productDescription"></p>
    </div>
  </div>
</div>

          <!-- specifications column -->
          <div class="container my-5 bg-white" v-if="product">
            <div class="row ">
              <div class="col px-3">
                <h4 class="text-left pt-2"> <strong>Product Specifications</strong></h4>
                <hr>
                <div class="card-group ">
                <div class="card my-3 mr-2" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">key Features</h5>
                    <hr>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                  </div>
                </div>
                <div class="card my-3 ml-2" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Whats in the Box</h5>
                    <hr>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                  </div>
                </div>
                </div>
                <!-- main specification -->
                <div class="card-group">
                <div class="card col-sm-8 my-3">
                  <div class="card-body">
                    <h5 class="card-title">Specification</h5>
                    <hr>
                    <h6><b>Main Material : </b> {{ }} </h6>
                    <h6><b>Model : </b> {{ }} </h6>
                    <h6><b>Size : </b> {{ }} </h6>
                    <h6><b>Weight : </b> {{ }} </h6>
                    <h6><b>Frame Color : </b> {{ }} </h6>
                    <!-- <h6><b>Artist Name : </b> {{ }} </h6> -->
                    <h6><b>Model Id : </b> {{ product.id }} </h6>
                  </div>
                </div>
                <div class="card col-sm-4 my-3  ml-3">
                  <div class="card-body">
                    <h5 class="card-title">Tags</h5>
                    <hr>
                    <h6><b> {{ product.productTags }} </b></h6>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <h1>top reviews</h1> -->
          <div class="container">
            <div class="col px-3">
              <div class="card-group">
                <div class="card col-sm-8 my-3">
                  <div class="card-body">
                    <h5 class="card-title">Product Review</h5>
                    <div class="card border-success mb-3" style="max-width: 18rem;" v-for="(Review, index) in productReviews" :key="index.id">
                      <div class="card-header bg-transparent"> {{ Review.title }} </div>
                      <div class="card-body">
                        <p class="card-text"> {{ Review.ReviewNote }} </p>
                      </div>
                      <div class="card-footer bg-transparent border-succes"> <b class="text-success">{{ Review.author }} </b> <br> {{ Review.createdAt | checkDate }} </div>
                    </div>
                    <hr>
                  <form>
                    <div class="form-row">
                      <div class="col">
                        <label class="text-muted">Full Name</label>
                        <input type="text" class="form-control" placeholder="John Doe" v-model="Review.author">
                      </div>
                      <div class="col">
                        <label class="text-muted">Review Title</label>
                        <input type="text" class="form-control" placeholder="e.g I like it / i dont like it" v-model="Review.title">
                      </div>
                    </div>
                    <div class="form-group pt-2">
                      <label class="text-muted">Detailed Review</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Please tell us more about your review" v-model="Review.ReviewNote"></textarea>
                    </div>
                     <button class="btn btn-primary" @click.prevent="createReview" id="btSubmit" :disabled="!Review.title || !Review.author || !Review.ReviewNote || !this.auth.currentUser">Submit</button>
                  </form>
                  </div>
                </div>
                </div>
            </div>
          </div>
<footerSec></footerSec>
  </div>
</template>

<script>
import { db } from '../../firebase'
// import { db } from '../../firebase'
export default {
  data () {
    return {
      products: [],
      Reviews: [],
      Review: {
        title: null,
        ReviewNote: null,
        author: null,
        createdAt: new Date().toLocaleString()
      }
      // profile: []
    }
  },
  firestore (e) {
    return {
      products: db.collection('products'),
      Reviews: db.collection('Reviews')
    }
    // }
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
    },
    productReviews (Reviews, productId) {
      var product = this.$route.params.productId
      const reviewItem = this.Reviews.filter(function (Review) {
        if (Review.productId === product) {
          return true
        }
      })
      return reviewItem
    }
  },
  methods: {
    getImage (images) {
      return images[0]
    },

    createReview () {
      var createdAt = new Date().toLocaleString()
      var Rid = this.product.id
      this.Review.productId = Rid
      this.Review.timeCreated = createdAt
      this.$firestore.Reviews.add(this.Review)
      this.Review = {}
    }
  },
  created () {
    // this.fetchMessages()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
.navbar-brand{
    font-size: 2.5rem !important;
    color: gray;
    font-family: 'Sacramento', sans-serif;
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
    /* color: white !important; */
    cursor: pointer;
}
.container{
  border-radius: 1% !important;
}
addToCart:hover{
  color: black !important;
}
button:hover{
    color: white !important;
}
</style>
