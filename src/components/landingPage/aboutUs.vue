<template>
  <div>
    <div class="about-title text-center text-white">
      <h1 class="pt-3 display-1 ">About-Us</h1>
      <p class="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid?</p>
      <hr class="style-eight py-4" />
    </div>
    <div class="container about-us">
      <div class="row">
        <div class="col-sm">
            <img src="../../assets/images/img-6.jpg" class="img-fluid" alt="" srcset="">
        </div>
        <div class="col-sm text-white about">
          <h1>A Little Intro</h1>
          <p
            class="pb-4"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem officia earum odio, dolores minus repudiandae corporis a vitae dolorum!</p>

          <h1>Our Exhibition</h1>
          <p
            class="pb-4"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dicta beatae laudantium natus sapiente iure earum magni quis, iste saepe.</p>

          <h1>Newsletter</h1>
          <p class="pb2">Lorem ipsum dolor sit amet.</p>

            <form class="pb-3">
                <div class="input-group mb-3 form">
            <input
              type="email"
              class="form-control"
              placeholder="Email Address"
              aria-label="Email Address"
              aria-describedby="button-addon2"
              required
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2" aria-required="Email Address">Subscribe</button>
            </div>
          </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap');
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
.about-title > h1 {
  font-family: "Sacramento", sans-serif;
  color: gray !important;
}
.about-title > p {
    font-family: 'Comic Neue', cursive;
}
.about-us > .row > .col-sm > h1 {
font-family: "Sacramento", sans-serif;
  color: gray !important;
  /* text-transform: none !important; */
}
.about-us > .row > .col-sm > p {
    font-family: 'Comic Neue', cursive;
}
.about{
    padding: 9rem 1rem;
}
.col-sm > img {
    border-radius: 2rem;
    border: 0.6rem solid rgb(51, 26, 26);
}
</style>
