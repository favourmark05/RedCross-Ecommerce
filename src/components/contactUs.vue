<template>
  <div>
    <navbar />
    <div class="contact">
      <h1 class="text-center pt-5">Contact-Us</h1>
    </div>
    <!-- <div class="breadcrum"> -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb pl-5">
          <li class="breadcrumb-item">
            <router-link to="/" class="home">Home</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">ContactUs</li>
        </ol>
      </nav>
    <!-- </div> -->
  </div>
</template>

<style scoped>
.contact {
  background-image: url("../assets/images/contactUs.jpg");
  height: 45vh;
  background-size: cover;
  padding-top: 5.5rem;
}
.contact > h1  {
    font-size: 8vw;
}
.home{
    color: orangered !important;
    text-decoration: none;
}
</style>
