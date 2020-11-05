<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <h3 class="text-white">Oriona ArtWorld</h3>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic" v-for="(image, images) in product.productImage" :key="images">
              <img class="img-responsive img-rounded"  :src="image" alt="User picture" />
            </div>
            <div class="user-info">
              <span class="user-name">
                {{ profile.fullName }} <br>
                <!-- <strong>{{  }}</strong> -->
              </span>
              <span class="user-role">{{ email }}</span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input type="text" class="form-control search-menu" placeholder="Search..." />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>General</span>
              </li>
              <li class="sidebar-dropdow">
                <router-link to="/Home">
                  <i class="fa fa-tachometer-alt"></i>
                  <span class="menu-text">Home</span>
                </router-link>
              </li>
              <!-- <li class="sidebar-dropdow">
                <router-link to="/product">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">Product</span>
                </router-link>
              </li> -->
              <li class="sidebar-dropdow">
                <router-link to="">
                  <i class="fas fa-dollar-sign"></i>
                  <span class="menu-text">Purchased History</span>
                </router-link>
              </li>
              <li class="sidebar-dropdow">
                <router-link to="/userProfiles">
                  <i class="fas fa-users"></i>
                  <span class="menu-text">User Profiles</span>
                </router-link>
              </li>
              <li class="sidebar-dropdow">
                <a @click="logout()">
              <i class="fa fa-power-off"></i>
              <span class="menu-text">LogOut</span>
            </a>
              </li>
              <li class="header-menu">
                <span>Extra</span>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
      </nav>
      <!-- page-content  -->
      <main class="page-content pt-2 bg-light">
    <div class="container-fluid p-5">

             <router-view/>
    </div>
      </main>

    </div>
  </div>
</template>

<style scoped>
span {
  cursor: pointer !important;
}
</style>

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
    logout () {
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
.sidebar-item > ul > li > a {
    outline: none !important;
}
.out{
  cursor: pointer;
}
.img-rounded {
  border-radius: 100% !important;
  height: 4rem !important;
  width: 3.6rem !important;
  z-index: 100 !important;
}
</style>
