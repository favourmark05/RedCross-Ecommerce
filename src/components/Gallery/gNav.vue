<template>
    <div>
        <div class="galleryNavBar">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="fas fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                        <router-link to="/userDashboard" class="nav-link active">My Account <span class="sr-only">(current)</span></router-link>
                        <!-- <a class="nav-link" href="#">Check Out</a> -->
                        <!-- <div > -->
                        <router-link to="/cartPreview" class="nav-link" >Shopping Cart <i class="fas fa-shopping-cart"></i> {{ this.$store.getters.productInCart }} items</router-link>
                        <a class="nav-link" ><i class="fas fa-dollar-sign"></i> {{ this.$store.getters.totalPrice + item.shipping }}</a>
                        <!-- </div> -->
                        </div>
                    </div>
                </nav>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      item: {
        shipping: 50
      }
    }
  },
  methods: {
    addToCart () {
      this.$store.commit('addToCart', this.item)
      this.$router.push('/cartPreview')
    }
  }
}
</script>

<style scoped>
.nav-link{
    color: rgb(138, 129, 129) !important;
    padding: 0 20px !important;
}
.fa-bars{
    color: white !important;
}
.galleryNavBar{
    padding-top:5.5rem;
}
</style>
