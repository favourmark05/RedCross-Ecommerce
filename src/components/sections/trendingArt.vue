<template>
  <div>
    <section class="topArtWork ">
      <div class="portfolio text-center text-white">
        <h1 class="pt-3 display-1">Top Art</h1>
        <p class="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid?</p>
        <hr class="style-eight py-4" />

        <!-- first slides -->
        <div class="row">
          <div class="col-sm">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../../assets/images/blog-images/blog-img1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../assets/images/blog-images/blog-img2.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../assets/images/blog-images/blog-img3.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- first content -->
          <div class="col-sm"> <h1 class="card-title">Oil Painting</h1>
    <p class="card-text pb-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link ">View Gallery <i class="fas fa-external-link-alt"></i> </a></div>
        </div>

        <!-- second slide -->
        <div class="row">
          <!-- second content -->
          <div class="col-sm pt-5">
            <h1 class="card-title">Oil Painting</h1>
    <p class="card-text pb-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link ">View Gallery <i class="fas fa-external-link-alt"></i> </a>
          </div>
          <!-- second images -->
          <div class="col-sm">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../../assets/images/blog-images/blog-img4.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../assets/images/blog-images/blog-img5.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../assets/images/blog-images/blog-img6.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- third slides -->
        <div class="row">
          <div class="col-sm">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../../assets/images/blog-images/blog-img7.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../assets/images/blog-images/blog-img8.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../assets/images/blog-images/blog-img9.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm pt-5 justify-content-center">
               <h1 class="card-title">Oil Painting</h1>
    <p class="card-text pb-5 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link ">View Gallery <i class="fas fa-external-link-alt"></i> </a>
          </div>
        </div>
        <!-- fourth slide -->
        <div class="row">
          <div class="col-sm pt-5">
               <h1 class="card-title">Oil Painting</h1>
    <p class="card-text pb-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link ">View Gallery <i class="fas fa-external-link-alt"></i> </a>
          </div>
          <div class="col-sm">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../../assets/images/blog-images/blog-img10.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../assets/images/blog-images/blog-img11.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../assets/images/blog-images/blog-img12.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end of slides -->
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
.topArtWork {
  background-color: black;
  padding-bottom: 3rem;
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
  /* content: "fab fa-staylinked"; */
  display: inline-block;
  position: relative;
  top: -1.3em;
  font-size: 3.5em;
  padding: 0 0.25em;
  /* background: white; */
}
.portfolio > h1 {
  /* font-size: 4.5rem; */
  font-family: "Sacramento", sans-serif;
  /* text-transform: uppercase; */
  color:gray !important;
}
.portfolio > p {
  font-family: 'Comic Neue', cursive;
}
.carousel-inner {
  border: 1px solid #fff;
}
.card-link:hover{
  /* background-color: red; */
  padding: 0 0.8rem;
  /* color: white; */
  border-radius: 1rem;
}
/* Shutter Out Horizontal */
.card-link {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  /* background: #e1e1e1; */
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.card-link:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: red;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  border-radius: 1rem;
  /* padding: 0 4rem !important; */
}
.card-link:hover, .card-link:focus, .card-link:active {
  color: white;
}
.card-link:hover:before, .card-link:focus:before, .card-link:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
.card-text {
  /* width: 15rem !important; */
  text-align: center !important;
  padding: 0 7rem;
}
.card-link{
  color: white;
}
</style>
