<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <h3 class="text-white">Administrator</h3>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img class="img-responsive img-rounded" src="../assets/logo1.png" alt="User picture" />
            </div>
            <div class="user-info">
              <span class="user-name">
                {{ firstName }} <br>
                <strong>{{ lastName }}</strong>
              </span>
              <span class="user-role">{{ role }}</span>
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
                <router-link to="/dashboard">
                  <i class="fa fa-tachometer-alt"></i>
                  <span class="menu-text">Dashboard</span>
                </router-link>
              </li>
              <li class="sidebar-dropdow">
                <router-link to="/product">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">Product</span>
                </router-link>
              </li>
              <li class="sidebar-dropdow">
                <router-link to="/sales">
                  <i class="fas fa-dollar-sign"></i>
                  <span class="menu-text">Sales</span>
                </router-link>
              </li>
              <li class="header-menu">
                <span>Extra</span>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
        <!-- sidebar-footer  -->
        <div class="sidebar-footer">
          <div class="dropdown">
            <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-bell"></i>
              <span class="badge badge-pill badge-warning notification">3</span>
            </a>
            <div class="dropdown-menu notifications" aria-labelledby="dropdownMenuMessage">
              <div class="notifications-header">
                <i class="fa fa-bell"></i>
                Notifications
              </div>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                <div class="notification-content">
                  <div class="icon">
                    <i class="fas fa-check text-success border border-success"></i>
                  </div>
                  <div class="content">
                    <div class="notification-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. In totam explicabo
                    </div>
                    <div class="notification-time">6 minutes ago</div>
                  </div>
                </div>
              </a>
              <a class="dropdown-item" href="#">
                <div class="notification-content">
                  <div class="icon">
                    <i class="fas fa-exclamation text-info border border-info"></i>
                  </div>
                  <div class="content">
                    <div class="notification-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. In totam explicabo
                    </div>
                    <div class="notification-time">Today</div>
                  </div>
                </div>
              </a>
              <a class="dropdown-item" href="#">
                <div class="notification-content">
                  <div class="icon">
                    <i class="fas fa-exclamation-triangle text-warning border border-warning"></i>
                  </div>
                  <div class="content">
                    <div class="notification-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. In totam explicabo
                    </div>
                    <div class="notification-time">Yesterday</div>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-center" href="#">View all notifications</a>
            </div>
          </div>
          <div class="dropdown">
            <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-envelope"></i>
              <span class="badge badge-pill badge-success notification">7</span>
            </a>
            <div class="dropdown-menu messages" aria-labelledby="dropdownMenuMessage">
              <div class="messages-header">
                <i class="fa fa-envelope"></i>
                Messages
              </div>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                <div class="message-content">
                  <div class="pic">
                    <img src="img/user.jpg" alt />
                  </div>
                  <div class="content">
                    <div class="message-title">
                      <strong>Jhon doe</strong>
                    </div>
                    <div class="message-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. In totam explicabo
                    </div>
                  </div>
                </div>
              </a>
              <a class="dropdown-item" href="#">
                <div class="message-content">
                  <div class="pic">
                    <img src="img/user.jpg" alt />
                  </div>
                  <div class="content">
                    <div class="message-title">
                      <strong>Jhon doe</strong>
                    </div>
                    <div class="message-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. In totam explicabo
                    </div>
                  </div>
                </div>
              </a>
              <a class="dropdown-item" href="#">
                <div class="message-content">
                  <div class="pic">
                    <img src="img/user.jpg" alt />
                  </div>
                  <div class="content">
                    <div class="message-title">
                      <strong>Jhon doe</strong>
                    </div>
                    <div class="message-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. In totam explicabo
                    </div>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-center" href="#">View all messages</a>
            </div>
          </div>
          <div class="dropdown">
            <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-cog"></i>
              <span class="badge-sonar"></span>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuMessage">
              <a class="dropdown-item" href="#">My profile</a>
              <a class="dropdown-item" href="#">Help</a>
              <a class="dropdown-item" href="#">Setting</a>
            </div>
          </div>
          <div class="out">
            <a @click="logout()">
              <i class="fa fa-power-off"></i>
            </a>
          </div>
          <div class="pinned-footer">
            <a href="#">
              <i class="fas fa-ellipsis-h"></i>
            </a>
          </div>
        </div>
      </nav>
      <!-- page-content  -->
      <main class="page-content pt-2 bg-light">
        <div id="overlay" class="overlay"></div>
    <div class="container-fluid p-5">

             <router-view/>
    </div>
      </main>
      <!-- page-content" -->
    </div>
  </div>
</template>

<script>
// import { fire } from '../firebase'
export default {
  name: 'admin',
  components: {
    // dashboard
  },
  data () {
    return {
      display: false,
      firstName: 'Mfonido Friday',
      lastName: 'Mark',
      role: 'Super Admin'
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
