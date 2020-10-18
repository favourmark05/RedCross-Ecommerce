<template>
    <div>
<navbar></navbar>
<section class="galleryNavBar">
    <nav class="navbar navbar-expand-lg navbar-light ">
  <!-- <a class="navbar-brand" href="#">Navbar</a> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="fas fa-bars"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link to="/userDashboard" class="nav-link active">My Account <span class="sr-only">(current)</span></router-link>
      <a class="nav-link" href="#">CheckOut</a>
      <a class="nav-link" href="#">Shopping Cart <i class="fas fa-shopping-cart"></i> {{ 0 }} items</a>
      <a class="nav-link"><i class="fas fa-dollar-sign"></i> {{ 400 }}</a>
    </div>
  </div>
</nav>
</section>
<div class="container">
    <div class="caption text-center bg-dar text-white">
    <h1 class="pt-3 display-1">Gallery</h1>
    <p class="py-3">Feel the Impact of our full Art gallery</p>
    <hr class="style-eight py-4">
</div>
</div>

            <!-- ====================== side bar ==================== -->
            <div class="container">
                <h1 class="text-center text-light pb-3">Product list</h1>
                <div class="row">
                  <div class="col-md-4 shadow" v-for="(product, index) in products" :key="index.id">
                    <div class="card product-item">
                      <div v-for="(image, index) in product.productImage" :key="index">
                        <img :src="image" class="card-img-top product-image">
                        <p class="card-text px-2" v-html="product.productDescription"></p>
                        <h4 class="pl-3">$ {{ product.productPrice}} </h4>
                        <div class="card-footer">
                          <h5 class="text-center "> <i class="fas fa-shopping-cart"></i> Add to cart</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <!-- ========================= End of side bar ================= -->
            <footerSec/>
    </div>
</template>

<script>
import { db } from '../../firebase'
export default {
  data () {
    return {
      products: []
    }
  },
  firestore () {
    return {
      products: db.collection('products')
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
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
.galleryNavBar{
    padding-top:5rem;
}
.nav-link{
    color: rgb(138, 129, 129) !important;
    padding: 0 20px !important;
}
.fa-bars{
    color: white !important;
}
hr.style-eight {
    overflow: visible; /* For IE */
    padding: 0;
    display: block;
    margin: 0 auto;
    width: 60%;
    border: none;
    border-top: medium double #fff;
    color: rgb(190, 15, 15);
    text-align: center;
}
hr.style-eight:after {
    /* content: "\002665"; */
    display: inline-block;
    position: relative;
    top: -1.3em;
    font-size: 3.5em;
    padding: 0 0.25em;
}
.caption > h1 {
    font-family: 'Sacramento', sans-serif;
}
h5:hover{
  color: white !important;
}
.card-footer:hover{
    background-color: orangered;
    color: white !important;
    cursor: pointer;
}
.product-image{
  height: 20rem !important;
}
.product-item>img:hover{
  background-image: linear-gradient(to right, red , yellow);
}
</style>
