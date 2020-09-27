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
      <a class="nav-link active" href="#">My Account <span class="sr-only">(current)</span></a>
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
  <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-1.jpg" class="card-img-top" alt="...">
    </div>
    <strong class="pl-2 "> {{ title }} </strong>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-2.jpg" class="card-img-top" alt="...">
    </div>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-3.jpg" class="card-img-top" alt="...">
    </div>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div>
  <div class="card bg-dark text-white  p-3">
    <blockquote class="blockquote mb-0">
      <img src="../../assets/port/img-5.jpg" class="card-img-top" alt="...">
    </blockquote>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-1.jpg" class="card-img-top" alt="...">
    </div>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-4.jpg" class="card-img-top" alt="...">
    </div>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-6.jpg" class="card-img-top" alt="...">
    </div>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-2.jpg" class="card-img-top" alt="...">
    </div>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <img src="../../assets/port/img-3.jpg" class="card-img-top" alt="...">
    </div>
    <p class="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vitae ab iste.</p>
    <h3 class="pl-2"> {{ price }} </h3>
    <div class="card-footer text-center">
      <h4 class="text-muted text-center">Add to cart</h4>
    </div>
  </div>
</div>
</div>
            <!-- ========================= End of side bar ================= -->
            <footerSec/>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Art Name',
      price: '$590'
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
