<template>
  <div class="login">
    <div class="container">
      <div class="row">
          <div class="text-center col">
              <i class="fas fa-shield-alt"></i>
          </div>
        <div class="col">
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
.login {
  background-image: url("https://wpengine.com/wp-content/uploads/2015/02/security-compressor-1000x628.jpg");
  background-size: cover;
  height: 100vh;
}
.container{
    padding: 5.1rem 10rem;
    /* background-color: white; */
}
.col{
    background-color: white;
    padding: 4rem 1rem;
    border-radius: 2rem;
}
.row{
    background-color: white;
    border-radius: 2rem;
}
.fa-shield-alt{
    font-size: 20rem;
    color: rgb(182, 18, 18);
    text-shadow: 6px 12px rgba(128, 128, 128, 0.918);
}
</style>
