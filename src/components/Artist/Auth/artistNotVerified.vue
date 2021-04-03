<template>
  <div class="overflow-hidden">
      <!-- <navbar class="pb-6"></navbar> -->
<div class="container bg-white error">
    <div class="row">
        <div class="col">
            <i class="fas fa-exclamation-triangle py-3"> Error</i>
            <h3 class="text-center">Your account is not verified. Please ensure that you verify your email linked to this account and login back again</h3>
            <router-link to="/artistLogin" class="btn btn-primary float-right">Login Again</router-link>
        </div>
    </div>
</div>
  </div>
</template>

<script>
// import Navbar from './navbar.vue'
export default {

}
</script>

<style scoped>
.error{
    margin-top: 20vh;
    /* overflow: hidden; */
}
.fas{
    color: red;
    font-size: 3rem;
}
</style>
