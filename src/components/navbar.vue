<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-white fixed-top">
      <router-link to="/Home" class="navbar-brand" >
    <img src="../assets/logo.png" width="100" height="100" class="d-inline-block align-top  img-fluid brand" alt="" loading="lazy">
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
          <!-- <li class="nav-item" v-show="auth.currentUser">
            <a  class="nav-link"> Hi <b>{{ profile && profile.fullName }}</b> </a>
          </li> -->
          <div class="dropdown" v-show="auth.currentUser">
          <button class="btn btn-primary dropdown-toggle name" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Hi <b>{{ profile.fullName }}</b>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <router-link to="/userDashBoard" class="dropdown-item">
            <i class="fas fa-user-alt"></i>
            Account</router-link>
            <!-- <a class="dropdown-item" href="#">Something else here</a> -->
            <a class="dropdown-item" @click="logout()">
              <i class="fas fa-power-off"></i>
              SignOut</a>
          </div>
        </div>
          <li class="nav-item">
            <router-link to="/aboutUs" class="nav-link">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="ourArtist" class="nav-link" >Our Artist</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sideBar" class="nav-link">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contactUs" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item" v-show="auth.currentUser">
            <router-link to="#" class="nav-link">Community Chat</router-link>
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
  },
  methods: {
    logout () {
      this.auth.signOut().then(() => {
        this.$router.replace('/')
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.fas{
  padding-right: 2rem;
}
.dropdown > button{
  color: white !important;
  background-color: orangered;
  border: 2px solid orangered;
}
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
