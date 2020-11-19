<template>
  <div class="user">
    <navbar/>
    <div class="container pt-5">
      <div class="row pt-5">
        <div class="col-sm-4">
          <div class="card" style="width: 18rem;">
            <div class="card-header">
            <router-link to="userDashboard">
             <h5> Welcome {{ profile.fullName }} !</h5>
            </router-link>
            </div>
            <ul class="list-group list-group-flush">
              <router-link to="Home" class="list-group-item"> <i class="fa fa-tachometer-alt"></i> Home </router-link>
              <router-link to="#" class="list-group-item"> Purchased History </router-link>
              <router-link to="userProfiles" class="list-group-item"> <i class="fas fa-users"></i> Update Profile</router-link>
              <router-link to="followedArtist" class="list-group-item"><i class="fas fa-users"></i> Followed Artist</router-link>
              <a class="list-group-item" @click="logOut()"><i class="fa fa-power-off"></i> LogOut User</a>
            </ul>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="container bg-white" v-show="$route.name === 'userDashboard'">
            <div class="row ">
              <div class="col">
                <h4 class="text-left pt-2"> <strong>Account Overview</strong></h4>
                <hr>
                <div class="card-group ">
                <div class="card my-3 mr-2" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Account Details</h5>
                    <hr>
                    <h4 class="card-text"> {{ profile.fullName }} </h4>
                    <p class="card-text"> {{ email }} </p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                  </div>
                </div>
                <div class="card my-3 ml-2" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Address Book</h5>
                    <hr>
                    <b><p>Your default Shipping Address </p></b>
                    <p class="card-text"> {{ profile.fullName}} </p>
                    <p class=""> {{ profile.mailAdd }} </p>
                    <p class=""> {{ profile.phone }} </p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                  </div>
                </div>
                </div>
                <!-- main specification -->
                <!-- <div class="card-group">
                <div class="card col-sm-8 my-3">
                  <div class="card-body">
                    <h5 class="card-title">Specification</h5>
                    <hr>
                    <h6><b>Main Material : </b> {{ }} </h6>
                    <h6><b>Model : </b> {{ }} </h6>
                    <h6><b>Size : </b> {{ }} </h6>
                    <h6><b>Weight : </b> {{ }} </h6>
                    <h6><b>Frame Color : </b> {{ }} </h6>
                    <h6><b>Model Id : </b> {{ product.id }} </h6>
                  </div>
                </div>
                <div class="card col-sm-4 my-3  ml-3">
                  <div class="card-body">
                    <h5 class="card-title">Tags</h5>
                    <hr>
                    <h6><b> {{ product.productTags }} </b></h6>
                  </div>
                </div>
                </div> -->
              </div>
            </div>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="container"></div>
    <footerSec></footerSec>
  </div>
</template>

<script>
import { db } from '../firebase'
export default {
  name: 'admin',
  components: {

  },
  data () {
    return {
      profiles: [],
      products: [],
      product: {
        productImage: null
      },
      email: null
      // displayName: null
    }
  },
  methods: {
    logOut () {
      this.auth.signOut().then(() => {
        this.$router.replace('/')
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    var user = this.auth.currentUser
    this.email = user.email
  },
  getImage (images) {
    return images[0]
  },
  firestore (e) {
    const user = this.auth.currentUser
    return {
      profile: db.collection('profiles').doc(user.uid)
    }
  }
}
</script>

<style scoped>
.user{
  background-color: white !important;
  height: 100% !important;
}
router-link, a {
  cursor: pointer !important;
  text-decoration: none !important;
  list-style-type: none !important;
  color: black;
}
router-link, a:hover{
  color: orangered !important;
}
</style>
