<template>
<div>
      <div class="limiter">
          <div class="container-login100">
              <div class="wrap-login100">
              <form class="login100-form validate-form">
                  <span class="login100-form-title p-b-43">
                  <i class="fas fa-user-plus"></i>
                  </span>
                  <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                  <input class="input100" type="text" name="fullName" v-model="fullName">
                  <span class="focus-input100"></span>
                  <span class="label-input100" >fullName</span>
                  </div>
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

                  <div class="container-login100-form-btn">
                  <button class="login100-form-btn" @click.prevent="register()" :disabled="!password || !email ||  !fullName">
                  SignUp
                  </button>
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
import { db } from '../../../firebase'

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
        .then((user) => {
          // Add a new document in collection "profiles"
          db.collection('artistProfiles').doc(user.user.uid).set({
            fullName: this.fullName
          })
          if (user != null) {
            user.user.sendEmailVerification()
            window.alert('Please check your mail box to verify your email account')
            // this.$toasted.warning('Please go to your mailBox and verify your Email', { icon: { name: 'check' } })
          }
          this.$router.replace('/artistLogin')
            .then(() => {
            })
            .catch((error) => {
              console.error('Error writing document: ', error)
            })

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
    }
  }

}
</script>

<style scoped>
.login100-more{
  background-image: url('../../../assets/images/test.jpg');
}
.fa-user-plus{
  font-size: 5rem;
}
.login100-form-btn{
  background-color:orangered
}
</style>
