<template>
  <!-- <div class="login">
  <div class="container">
    <div class="row">
      <div class="col-sm- bg-white">
        <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control" required
                id="exampleInputEmail1"
                v-model="email"
                aria-describedby="emailHelp"
              />
              <small
                id="emailHelp"
                class="form-text text-muted"
              >We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" v-model="password" class="form-control" required id="exampleInputPassword1" />
            </div>
            <button class="btn btn-danger" type="submit" @click.prevent="access()">Login</button>
          </form>
      </div>
    </div>
  </div>
  </div> -->
      <div class="limiter">
          <div class="container-login100">
              <div class="wrap-login100">
              <form class="login100-form validate-form">
                  <span class="login100-form-title p-b-43">
                  Login to continue
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
                  <a href="#" class="txt1">
                  Forgot Password?
                  </a>
                  </div>
                  </div>

                  <div class="container-login100-form-btn">
                  <button class="login100-form-btn" @click.prevent="access()">
                  Login
                  </button>
                  </div>
              </form>

              <div class="login100-more" >
              </div>
              </div>
          </div>
      </div>
</template>

<script>
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
    access () {
      this.auth.signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace('/admin')
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
    }
  }

}
</script>

<style scoped>
.login100-more{
  background-image: url('../assets/images/test.jpg');
}
</style>
