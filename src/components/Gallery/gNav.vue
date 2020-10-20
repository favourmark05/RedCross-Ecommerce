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
                        <a class="nav-link" href="#">Check Out</a>
                        <!-- <div > -->
                        <router-link to="cartPreview" class="nav-link" href="#">Shopping Cart <i class="fas fa-shopping-cart"></i> {{ item.productQuantity }} items</router-link>
                        <a class="nav-link"><i class="fas fa-dollar-sign"></i> {{ item.productPrice }}</a>
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
        productQuantity: null
      }
    }
  },
  methods: {
    addToCart (state, item) {
      var found = state.cart.find(product => product.productId === item.productId)

      if (found) {
        found.productQuantity++
      } else {
        state.cart.push(item)
      }
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
