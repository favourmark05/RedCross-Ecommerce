<template>
  <div>
    <navbar />
    <div class="contact">
      <h1 class="text-center pt-5 ">Contact-Us</h1>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb pl-5">
        <li class="breadcrumb-item">
          <router-link to="/" class="home">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
      </ol>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <img src="../../assets/images/oriona.jpeg" class="img-fluid pt-5 logo-img" alt srcset />
        </div>
        <div class="col-sm-4 pt-5 map">
          <h1 class="text-white pt-5">Our contact Info</h1>
          <i class="fas fa-map-marker-alt pb-4">
            <span>  22 Abuja Road, Nigeria</span>
          </i>
          <br />
          <i class="fas fa-mobile-alt pb-4">
            <span>  +2349034754819</span>
          </i>
          <br />
          <i class="fas fa-fax pb-4">
            <span>  0187465</span>
          </i>
          <br />
          <i class="fas fa-envelope pb-4">
            <span>  oriona@gmail.com</span>
          </i>
          <br />
          <div class="social">
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- =============== send message area======== -->
    <div class="container pt-4">
      <div class="row pt-5">
        <div class="col-sm-4">
          <h1 class="text-white pt-5">Our Lagos Office</h1>
          <i class="fas fa-map-marker-alt pb-4">
            <span>  22 Abuja Road, Nigeria</span>
          </i>
          <br />
          <i class="fas fa-mobile-alt pb-4">
            <span>  +2349034754819</span>
          </i>
          <br />
          <i class="fas fa-fax pb-4">
            <span>  0187465</span>
          </i>
          <br />
          <i class="fas fa-envelope pb-4">
            <span>  oriona@gmail.com</span>
          </i>
          <br />
          <div class="social">
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram-square"></i>
          </div>
        </div>
        <div class="col-sm-8">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="FullName" class="text-white">Full Name</label>
                <input type="text" class="form-control bg-dark text-white" id="FullName" />
              </div>
              <div class="form-group col-md-6">
                <label for="email" class="text-white">Email</label>
                <input type="email" class="form-control bg-dark text-white" id="email" />
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1" class="text-white">Message</label>
              <textarea class="form-control bg-dark text-white" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" @send.prevent="message" class="btn btn-dark">Send</button>
          </form>
        </div>
      </div>
    </div>

    <!-- ===================== NewsLetter Section============ -->
    <div class="container pt-5">
        <div class="row">
            <div class="col-sm">
                <h1 class="text-white">Newsletter</h1>
          <!-- <p class="pb2 text-white">Get Updated with our latest ArtWorks</p> -->

            <form>
                <div class="input-group mb-3 form">
            <input
              type="email"
              class="form-control bg-dark text-white"
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
            <div class="col-sm pt-5">
                <p class="subContent">Feel free to place your Mail_ID and Subscribe to our Newsletter here. So that, you can receive our exiting Updates and Offers with no wait! </p>
            </div>
        </div>
    </div>
    <footerSec/>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap");
.contact {
  background-image: url("../../assets/images/contactUs.jpg");
  height: 35vh;
  background-size: cover;
  padding-top: 5.5rem;
}
.contact > h1 {
  font-size: 8vw;
  color: whitesmoke;
}
.home {
  color: orangered !important;
  text-decoration: none;
}
.map {
  background-image: url("../../assets/images/map.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* opacity: 0.2; */
}
.logo-img {
  height: 500px;
  border-radius: 10% !important;
}
.fas {
  color: gray;
  font-size: 1vw;
}
.fas > span {
  font-family: "Work Sans", sans-serif;
}
.fa-twitter-square {
  color: rgb(29, 161, 242);
}
.fa-facebook-square {
  color: rgb(66, 103, 178);
}
.fa-instagram-square {
  color: #d6249f;
  color: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}
.fab {
  padding: 0 9px;
  font-size: 2rem;
}
.subContent{
    color: rgb(163, 158, 158) !important;
}
.fas {
  color: white !important;
}
i > span{
  color:rgb(129, 125, 125);
}
h1{
  font-size: 3rem;
}
</style>
