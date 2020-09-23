<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-white fixed-top">
      <router-link to="/homePage" class="navbar-brand" >
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
          <li class="nav-item ">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a data-toggle="modal" data-target="#staticBackdrop" class="nav-link" href="#" @click="$bvModal.show('bv-modal-example')">Register</a>
          </li>
          <li class="nav-item">
            <router-link to="/Authen" class="nav-link" >Admin</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Register modal -->
      <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title " id="staticBackdropLabel">Register</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- this is the modal form section -->
        <div class="modal-body" id="success">
              <form>
          <div class="form-group" >
            <label for="exampleInputEmail1">Full Name</label>
            <input type="text" class="form-control" v-model="fullName" id="inputName" aria-describedby="fullNameHelp" required>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp" required>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" required>
          </div>
          <a class="btn btn-danger" @click.prevent="register()" >Submit</a>
    </form>
        </div>
      </div>
    </div>
  </div>
<!-- end of modal -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullName: null,
      email: null,
      password: null,
      success: false
    }
  },
  methods: {
    register () {
      this.auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$toasted.success('Account created successfuly', { icon: { name: 'check' } })
          this.fullName = ''
          this.email = ''
          this.password = ''
        })
        .catch((err) => {
        // Handle Errors here.
          console.log(err)
          var errorCode = err.code
          var errorMessage = err.message
          if (errorCode === 'auth/weak-password') {
            this.$toasted.error('Password is too weak', { icon: { name: 'fa-times' } })
          } else {
            this.$toasted.error(errorMessage, { icon: { name: 'fa-exclamation-triangle' } })
          }
        })
    },
    alertDisplay () {

    }
  }

}
</script>

<style scoped>
.nav-link{
  color: black !important;
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

 @media only screen and (max-width: 976px) {
  .navbar {
    position: relative;
}
.brand {
    position: absolute;
    left: 50%;
    margin-left: -50px !important;
    margin-top: -25px !important;
    display: block;
}
}
</style>
