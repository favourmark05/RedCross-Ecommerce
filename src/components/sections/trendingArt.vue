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
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
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
    <a href="#" class="card-link ">View Gallery</a></div>
        </div>
        <!-- second slide -->
        <div class="row">
          <div class="col-sm pt-5">
            <h1 class="card-title">Oil Painting</h1>
    <p class="card-text pb-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link ">View Gallery</a>
          </div>
          <div class="col-sm">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
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
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
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
          <div class="col-sm pt-5">
               <h1 class="card-title">Oil Painting</h1>
    <p class="card-text pb-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link ">View Gallery</a>
          </div>
        </div>
        <!-- fourth slide -->
        <div class="row">
          <div class="col-sm pt-5">
               <h1 class="card-title">Oil Painting</h1>
    <p class="card-text pb-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link ">View Gallery</a>
          </div>
          <div class="col-sm">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
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
  content: "\002665";
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
.carousel-inner {
  border: 1px solid #fff;
}
</style>
