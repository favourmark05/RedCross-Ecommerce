<template>
<div>
  <navbar></navbar>
      <div class="limiter">
          <div class="container-login100">
              <div class="wrap-login100">
              <form class="login100-form validate-form">
                  <span class="login100-form-title p-b-43">
                  <i class="fas fa-fingerprint"></i>
                  </span>

                  <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                  <input class="input100" type="text" name="email" v-model="email">
                  <span class="focus-input100"></span>
                  <span class="label-input100" >Email</span>
                  </div>

                  <div class="wrap-input100 validate-input" data-validate="Password is required">
                  <input class="input100" type="password" name="pass" v-model="password">
                  <span class="focus-input100"></span>
                  <span class="label-input100">Password</span>
                  </div>

                  <div class="flex-sb-m w-full p-t-3 p-b-32">
                  <div class="contact100-form-checkbox">
                  <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
                  <label class="label-checkbox100" for="ckb1">
                  Remember me
                  </label>
                  </div>

                  <div>
                  <router-link to="reset" class="txt1" >
                  Forgot Password?
                  </router-link>
                  </div>
                  </div>

                  <div class="container-login100-form-btn">
                  <button class="login100-form-btn" @click.prevent="login()">
                  Login
                  </button>
                  </div>
                  <!-- <h6 class="text-center pt-4">Login with your Social Account</h6> -->
                  <div class="d-flex justify-content-around">
                    <!-- <button class="fab fa-facebook social pt-3" @click.prevent="facebookLogin()"></button> -->
                    <!-- <button class="fab fa-google social pt-3" @click.prevent="GoogleLogin()"></button> -->
                  </div>
              </form>

              <div class="login100-more" >
              </div>
              </div>
          </div>
      </div>
</div>
</template>

<script>
import { firebase } from '../../firebase'
export default {
  name: 'login',
  components: {

  },
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login () {
      const Admin = 'admin@oriona.com'
      this.auth.signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          if (this.email !== Admin) {
            this.$router.replace('/Home')
          } else {
            this.$router.replace('/admin')
          }
          this.$toasted.success('Login successfuly', { icon: { name: 'check' } })
        }).catch((err) => {
        // Handle Errors here.
          var errorCode = err.code
          var errorMessage = err.message
          if (errorCode === 'auth/wrong-password') {
            this.$toasted.error('authentication error', { icon: { name: 'fa-exclamation-triangle' } })
          } else {
            this.$toasted.error(errorMessage, { icon: { name: 'fa-times' } })
          }
        })
    },
    facebookLogin () {
      // Sign in using a popup.
      // const Admin = 'admin@oriona.com'
      var provider = new firebase.auth.FacebookAuthProvider()

      firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
        // eslint-disable-next-line no-unused-vars
        var token = result.credential.accessToken
        // return token
        // The signed-in user info.
        var user = result.user
        console.log(user)
        this.$router.replace('/Home')
      // ...
      }).catch(function (error) {
      // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        console.log(errorCode, errorMessage, email, credential)
      // ...
      })
    },
    GoogleLogin () {
    // Sign in using a popup.
      // const Admin = 'admin@oriona.com'
      var provider = new firebase.auth.GoogleAuthProvider()

      firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken
        // The signed-in user info.
        // Authorization: Bearer[TOKEN] 'https://www.googleapis.com/oauth2/v2/userinfo'

        var user = result.user
        console.log(user)
        this.$router.replace('/Home')
      }).catch(function (error) {
      // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        console.log(errorCode, errorMessage, email, credential)
      // ...
      })
    }
  }
}
</script>

<style scoped>
.login100-more{
  background-image: url('../../assets/images/test.jpg');
}
.login100-form-btn{
  background-color:orangered
}
.fa-fingerprint{
font-size: 5rem;
}
.social{
  font-size: 2rem !important;
  cursor: pointer;
}
.fa-google{
  color:#DB4437
}
.fa-facebook{
  color: rgb(66,103,178);
}
</style>
