<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <h3 class="text-white">{{ artistProfiles.fullName }}</h3>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img class="img-responsive img-rounded" :src="artistProfiles.artist_Photo_Url" alt="User picture" />
            </div>
            <div class="user-info">
              <span class="user-name">
                {{ artistProfiles.fullName }} <br>
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
                <router-link to="artistDashboard">
                  <i class="fa fa-tachometer-alt"></i>
                  <span class="menu-text">Dashboard</span>
                </router-link>
              </li>
              <li class="sidebar-dropdow">
                <router-link to="/artistProfile">
                  <i class="fas fa-user"></i>
                  <span class="menu-text">Update info</span>
                </router-link>
              </li>
              <li class="sidebar-dropdow">
                <router-link to="/artistWork">
                  <i class="fas fa-briefcase"></i>
                  <span class="menu-text">Update your ArtWorks</span>
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
      <div v-show="$route.name === 'artistPanel'">
            <h1>Please do update your profile as an Artist Thanks</h1>
          </div>
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
      artistProfiles: [],
      fullName: null,
      email: null
    }
  },
  methods: {
    logout () {
      this.auth.signOut().then(() => {
        this.$router.replace('/artistLogin')
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    var user = this.auth.currentUser
    this.fullName = user.fullName
    this.email = user.email
  },
  firestore () {
    const user = this.auth.currentUser
    return {
      artistProfiles: db.collection('artistProfiles').doc(user.uid)
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
