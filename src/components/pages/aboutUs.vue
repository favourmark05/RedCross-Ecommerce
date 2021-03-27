<template>
    <div>
        <navbar></navbar>
        <div class="cover pt-5">
            <div class="content container">
                <div class="col-sm-8 pt-5">
                    <h1 class="pt-3">Oriọna</h1>
                    <!-- <h5 class="text-title text-white">About Us</h5> -->
                    <p class="text-white about-content">
                        Oriona Artword is a global Social/Commercial Art Community for Art/Craft lovers, enthusiasts and Artist.

                        With an over whelming virtual presence, we exibit the best of Art Masterpieces from renowned and budding Artists around the globe.

                        We carry out holistic and purposeful artistic programmes and education which includes exhibitions, Workshops, Symposia, Community Development Programmes aimed at deepening Visual Arts awareness and appreciation.

                        As a Corporate Policy, We leverage on our Services Arts for Community impact by donating percentage of the sales by our artist to charity organisations.

                        In our desire to be a leading destination for Arts/Crafts, we support young Artists to build a Career and showcase their talents and linking them to the global art Community of Arts.
                    </p>
                </div>
                <div class="col-sm-4"></div>
                <!-- <h1>Oriona</h1> -->
            </div>
        </div>
        <h1 class="text-center text-white pt-3 about">About - Us</h1>
        <hr class="text-white">
        <div class="container pt-4">
            <div class="row">
                <div class="col-sm">
                    <h4 class="text-white">Our Mission</h4>
                    <hr class="float-left">
                    <p class="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident aliquid totam aperiam aut unde cupiditate quam tenetur, deleniti quo maiores ut. Aliquam voluptatibus eos officiis, qui facilis, error, labore inventore aliquid accusamus atque repellendus hic quia corrupti ipsum? Commodi.</p>
                </div>
                <div class="col-sm"></div>
            </div>
        </div>
        <div class="container pt-4">
            <div class="row">
                <div class="col-sm">
                </div>
                <div class="col-sm">
                    <h4 class="text-white">Our Vision</h4>
                    <hr class="float-left">
                    <p class="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident aliquid totam aperiam aut unde cupiditate quam tenetur, deleniti quo maiores ut. Aliquam voluptatibus eos officiis, qui facilis, error, labore inventore aliquid accusamus atque repellendus hic quia corrupti ipsum? Commodi.</p>
                </div>
            </div>
        </div>
        <div class="container pt-4">
            <div class="row">
                <div class="col-sm">
                    <h4 class="text-white">Our Services</h4>
                    <hr class="float-left">
                    <p class="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident aliquid totam aperiam aut unde cupiditate quam tenetur, deleniti quo maiores ut. Aliquam voluptatibus eos officiis, qui facilis, error, labore inventore aliquid accusamus atque repellendus hic quia corrupti ipsum? Commodi.</p>
                </div>
                <div class="col-sm">
                </div>
            </div>
        </div>
        <div class="container about-us">
      <div class="row">
        <div class="col-sm">
            <img src="../../assets/images/img-6.jpg" class="img-fluid" alt="" srcset="">
        </div>
        <div class="col-sm text-white about">
          <h1 class="pt-5 text-white exhibit">Our Exhibition</h1>
          <p
            class="pb-4"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dicta beatae laudantium natus sapiente iure earum magni quis, iste saepe.</p>

        </div>
      </div>
    </div>
        <footerSec></footerSec>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.cover{
    background-image: linear-gradient(rgba(10, 10, 10, 0.6),rgba(10, 10, 10, 0.6),rgba(10, 10, 10, 0.6)), url('../../assets/oil.jpg');
    background-size: cover;
    height: 75vh;
    border-bottom: 3px solid orangered;
}
.col-sm-8 > h1 {
    background-color: #c9c137;
    background-image: linear-gradient(4deg, #d88921, #c56b16);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-size: 90px;
    font-family: 'Anton', sans-serif;
}
.col > p {
    font-size: 6vw;
}
hr {
  overflow: visible; /* For IE */
  padding: 0;
  display: block;
  margin: 0 auto;
  width: 5%;
  border: none;
  border-top: medium double #fff;
  color: rgb(190, 15, 15);
  text-align: center;
}
hr:after {
  display: inline-block;
  position: relative;
  top: -1.3em;
  font-size: 3.5em;
  padding: 0 0.25em;
}
.about,.exhibit{
    font-family: 'Sacramento', sans-serif;
    font-size: 5vh;
}
.img-fluid{
    border: 4px solid white;
}
.about-content{
    /* font-weight: bold !important; */
}
</style>
