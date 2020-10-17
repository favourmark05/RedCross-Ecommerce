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
<div class="card-columns">
  <!-- <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-1.jpg" class="card-img-top" alt="...">
    </div>
    <strong class="pl-2 "> {{ products.title }} </strong>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ products.price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div> -->
  <!-- <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-2.jpg" class="card-img-top" alt="...">
    </div>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ products.price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div> -->
  <!-- <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-3.jpg" class="card-img-top" alt="...">
    </div>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ products.price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div> -->
  <!-- <div class="card bg-dark text-white  p-3">
    <blockquote class="blockquote mb-0">
      <img src="../../assets/port/img-5.jpg" class="card-img-top" alt="...">
    </blockquote>
    <p class="pl-2 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2 text-white"> {{ products.price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div> -->
  <!-- <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-1.jpg" class="card-img-top" alt="...">
    </div>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ products.price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div> -->
  <!-- <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-4.jpg" class="card-img-top" alt="...">
    </div>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ products.price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div> -->
  <!-- <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-6.jpg" class="card-img-top" alt="...">
    </div>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ products.price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div> -->
  <!-- <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-2.jpg" class="card-img-top" alt="...">
    </div>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ products.price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div> -->
  <!-- <div class="card" v-for="product in products" :key="product">
    <div class="card-body">
      <img src="../../assets/port/img-3.jpg" class="card-img-top" alt="...">
    </div>
    <div  v-for="(image, images) in products.productImage" :key="images" class="card-body">
                      <img :src="image" alt="" srcset="" class="disImage img-fluid p-2">
              </div>
    <p class="pl-2">na him be this</p>
    <h3 class="pl-2"> {{ products.price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div> -->
  <div class="col-md-4" v-for="(product, id) in products" :key="id">
<div v-for="(image, index) in product.productImage" :key="index">
  <img :src="image" width="250px">
  <p class="text-white">{{ product.productPrice}}</p>
  <p class="text-white"> {{ product.productDescription}}</p>
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
h4:hover{
  color: white !important;
}
.card-footer:hover{
    background-color: orangered;
    color: white !important;
    cursor: pointer;
}
</style>
