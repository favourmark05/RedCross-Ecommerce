<template>
  <div class="user">
<div class="col-sm-8">
          <div class="container bg-white" v-show="$route.name === 'artistDashboard'">
            <div class="row ">
              <div class="col">
                <h4 class="text-left pt-2"> <strong>Account Overview</strong></h4>
                <hr>
                <div class="card-group ">
                <div class="card my-3 mr-2" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Account Details</h5>
                    <hr>
                    <h4 class="card-text"> {{ artistProfiles.fullName }} </h4>
                    <p class="card-text"> {{ email }} </p>
                  </div>
                </div>
                <div class="card my-3 ml-2" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Address Book</h5>
                    <hr>
                    <b><p>Your default Shipping Address </p></b>
                    <p class="card-text"> {{ artistProfiles.fullName}} </p>
                    <p class=""> {{ artistProfiles.mailAdd }} </p>
                    <p class=""> {{ artistProfiles.phone }} </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <router-view></router-view> -->
        </div>
    <!-- <div class="container"></div> -->
    <!-- <footerSec></footerSec> -->
  </div>
</template>

<script>
import { db } from '../../../firebase'
export default {
  name: 'admin',
  components: {

  },
  data () {
    return {
      artistProfiles: [],
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
      artistProfiles: db.collection('artistProfiles').doc(user.uid)
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
