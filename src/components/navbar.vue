<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-white fixed-top">
      <router-link to="/Home" class="navbar-brand" >
    <img src="../assets/ge.png" width="100" height="100" class="d-inline-block align-top  img-fluid brand" alt="" loading="lazy">
  </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="fas fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item" v-show="!auth.currentUser">
            <router-link to="/Login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-show="!auth.currentUser">
            <router-link to="/signUp" class="nav-link">SignUp</router-link>
          </li>
          <p class="nav-item" v-show="auth.currentUser">
            <a  class="nav-link"> Hi <b>{{ profile && profile.fullName }}</b> </a>
          </p>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <router-link to="/sideBar" class="nav-link">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contactUs" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { db } from '../firebase'
export default {
  data () {
    return {
      profile: []
      // profile: []
    }
  },
  firestore (e) {
    if (this.auth.currentUser) {
      const user = this.auth.currentUser
      return {
        profile: db.collection('profiles').doc(user.uid)
      }
    }
  },
  created () {
    if (this.auth.currentUser) {
      var user = this.auth.currentUser
      this.email = user.email
    }
  }
}
</script>

<style scoped>
.nav-link{
  color: gray !important;
}
nav{
  border-bottom: 8px solid orangered;
}
.fa-bars{
  color: orangered;
}
.nav-link:hover{
  color: orangered !important;
}
.fa-sign-in-alt:hover{
  color: orangered !important;
  text-decoration: none;
}
.dropdown-item:hover{
  color: orangered;
  cursor: pointer !important;
}
.fa-sign-in-alt,.dropdown-toggle{
  color: gray !important;
}

 @media only screen and (max-width: 976px) {

.brand {
    position: absolute;
    left: 50%;
    margin-left: -50px !important;
    margin-top: -25px !important;
    display: block;
}
}
</style>
