<template>
     <div class="auth-wrapper aut-bg-img-side cotainer-fiuid align-items-stretch">
        <div class="row align-items-center w-100 align-items-stretch bg-white">
            <div class="d-none d-lg-flex col-lg-8 aut-bg-img align-items-center d-flex justify-content-center">
                <div class="col-md-8">
                    <h1 class="text-white mb-5">Reset Account Password</h1>
                    <p class="text-white">Having issues logging into your account, do provide your account email and a reset link will be sent to your email address</p>
                </div>
            </div>
            <div class="col-lg-4 align-items-stret h-100 align-items-center d-flex justify-content-center">
                <div class=" auth-content text-center">
                    <div class="mb-4">
                        <i class="fas fa-envelope-open-text"></i>
                    </div>
                    <h3 class="mb-4">Reset Password</h3>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" v-model="user.email" placeholder="Email">
                    </div>
                    <button class="btn btn-danger mb-4 shadow-2" @click.prevent="resetPassword" :disabled="!user.email">Reset Password</button>
                    <p class="mb-0 text-muted">Don’t have an account? <router-link to="artistSignUp">Signup</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { db } from '../../firebase'
export default {
  data () {
    return {
      user: {
        email: ''
      }
    }
  },
  methods: {
    resetPassword () {
      this.auth.sendPasswordResetEmail(this.user.email).then(() => {
        // Email sent.
        this.$toasted.success('check your mail for Reset Link sent', { icon: { name: 'check' } })
        this.user = {}
        this.$router.replace('/Home')
      }).catch((error) => {
        // An error happened.

        this.$toasted.error(error, { icon: { name: 'fa-times' } })
      })
    }
  }
}
</script>

<style scoped>
.aut-bg-img{
    background-image: url('../../../assets/images/bg4.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
}
.fa-envelope-open-text{
    color: rgb(116, 214, 206) !important;
    font-size: 3rem;
}
</style>
