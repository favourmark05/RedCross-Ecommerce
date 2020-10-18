<template>
    <div class="addToCart">
            <button class="text-center "> <i class="fas fa-shopping-cart"></i> Add To Cart </button>
    </div>
</template>

<script>
export default {
  name: 'addToCart',
  props: {
    name: String,
    price: String,
    productId: String
  },
  data () {
    return {
      productName: this.name,
      productPrice: this.price,
      productID: this.id
    }
  }
}
</script>

<style scoped>
button:hover{
    color: white !important;
}
button{
    text-align: center !important;
    justify-content: center !important;
    font-size: 1.2rem !important;
}
</style>
