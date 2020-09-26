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
    <div class="row">
    <div class="card-deck">
  <div class="card">
    <img src="../../assets/port/img-1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <h4 class="text-muted"> {{ price }} </h4>
    </div>
    <div class="card-footer text-center">
      <h3 class="text-muted text-center">Add to cart</h3>
    </div>
  </div>
  <div class="card">
    <img src="../../assets/port/img-2.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <h4 class="text-muted"> {{ price }} </h4>
    </div>
    <div class="card-footer text-center">
      <h3 class="text-muted text-center">Add to cart</h3>
    </div>
  </div>
  <div class="card">
    <img src="../../assets/port/img-3.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <h4 class="text-muted"> {{ price }} </h4>
    </div>
    <div class="card-footer text-center">
      <h3 class="text-muted text-center">Add to cart</h3>
    </div>
  </div>
  <div class="card">
    <img src="../../assets/port/img-4.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <h4 class="text-muted"> {{ price }} </h4>
    </div>
    <div class="card-footer text-center">
      <h3 class="text-muted text-center">Add to cart</h3>
    </div>
  </div>
</div>

    <!-- second set of images -->
    <div class="card-deck py-5">
  <div class="card">
    <img src="../../assets/port/img-5.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <h4 class="text-muted"> {{ price }} </h4>
    </div>
    <div class="card-footer text-center">
      <h3 class="text-muted text-center">Add to cart</h3>
    </div>
  </div>
  <div class="card">
    <img src="../../assets/port/img-6.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <h4 class="text-muted"> {{ price }} </h4>
    </div>
    <div class="card-footer text-center">
      <h3 class="text-muted text-center">Add to cart</h3>
    </div>
  </div>
  <div class="card">
    <img src="../../assets/port/img-4.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <h4 class="text-muted"> {{ price }} </h4>
    </div>
    <div class="card-footer text-center">
      <h3 class="text-muted text-center">Add to cart</h3>
    </div>
  </div>
  <div class="card">
    <img src="../../assets/port/img-3.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <h4 class="text-muted"> {{ price }} </h4>
    </div>
    <div class="card-footer text-center">
      <h3 class="text-muted text-center">Add to cart</h3>
    </div>
  </div>
</div>

<!-- third set of images -->
<div class="card-deck">
  <div class="card">
    <img src="../../assets/port/img-5.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <h4 class="text-muted"> {{ price }} </h4>
    </div>
    <div class="card-footer text-center">
      <h3 class="text-muted text-center">Add to cart</h3>
    </div>
  </div>
  <div class="card">
    <img src="../../assets/port/img-6.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <h4 class="text-muted"> {{ price }} </h4>
    </div>
    <div class="card-footer text-center">
      <h3 class="text-muted text-center">Add to cart</h3>
    </div>
  </div>
  <div class="card">
    <img src="../../assets/port/img-3.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <h4 class="text-muted"> {{ price }} </h4>
    </div>
    <div class="card-footer text-center">
      <h3 class="text-muted text-center">Add to cart</h3>
    </div>
  </div>
  <div class="card">
    <img src="../../assets/port/img-4.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <h4 class="text-muted"> {{ price }} </h4>
    </div>
    <div class="card-footer text-center">
      <h3 class="text-muted text-center">Add to cart</h3>
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
h3:hover{
    color: white !important;
}
.card-footer:hover{
    background-color: orangered;
    color: white !important;
}
</style>
