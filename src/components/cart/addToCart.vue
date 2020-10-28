<template>
    <div class="addToCart">
            <button class="text-center" @click="addToCart"><i class="fas fa-shopping-cart"></i> Add To Cart </button>
    </div>
</template>

<script>
export default {
  name: 'addToCart',
  props: {
    name: String,
    price: String,
    pId: String,
    image: String
    // tags: [Number, String]
  },
  data () {
    return {
      item: {
        productName: this.name,
        productPrice: this.price,
        productId: this.pId,
        productImage: this.image,
        productQuantity: 1,
        shippingPrice: 500
        // productTags: this.tags
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
button:hover{
    color: white !important;
}
button{
    text-align: center !important;
    justify-content: center !important;
    font-size: 1.2rem !important;
}
</style>
