<template>
    <div>
        <div class="row">
        <!-- <div class="col-md-4  shadow" v-for="(product, index) in products" :key="index.id">
                    <div class="card product-item d-flex">
                      <div v-for="(image, index) in product.productImage" :key="index">
                        <img :src="image" class="card-img-top product-image">
                        <router-link :to="{ name: 'productPreview', params: { productId: product.id } }">
                        <h5 class="card-title px-3 pt-3" style="text-transform:uppercase"> <b>{{ product.productName }}</b> </h5>
                        </router-link>
                        <h6 class="pl-3 card-prices">$ {{ product.productPrice}} </h6>
                        <div class="card-footer">
                            <addToCart
                              :image="getImage(product.productImage)"
                              :name="product.productName"
                              :price="product.productPrice"
                              :p-id="product.id">
                            </addToCart>
                        </div>
                      </div>
                    </div>
                  </div> -->
        </div>
                  <h1 class="text-white"> street layout</h1>
    </div>
</template>

<script>
import { db } from '../../firebase'
export default {
  data () {
    return {
      products: []
    }
  },
  firestore () {
    return {
      products: db.collection('products')
    }
  },
  methods: {
    getImage (images) {
      return images[0]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
.galleryNavBar{
    padding-top:5rem;
}
.nav-link{
    color: rgb(138, 129, 129) !important;
    padding: 0 20px !important;
}
.fa-bars{
    color: white !important;
}
hr.style-eight {
    overflow: visible; /* For IE */
    padding: 0;
    display: block;
    margin: 0 auto;
    width: 60%;
    border: none;
    border-top: medium double #fff;
    color: rgb(190, 15, 15);
    text-align: center;
}
hr.style-eight:after {
    /* content: "\002665"; */
    display: inline-block;
    position: relative;
    top: -1.3em;
    font-size: 3.5em;
    padding: 0 0.25em;
}
.caption > h1 {
    font-family: 'Sacramento', sans-serif;
}
/* h5:hover{
  color: white !important;
} */
.card-footer:hover{
    background-color: orangered;
    color: white !important;
    cursor: pointer;
}
.product-image{
  height: 15rem !important;
}
.product-item>img:hover{
  background-image: linear-gradient(to right, red , yellow);
}
.btn{
  background-color: orangered !important;
  text-align: center !important;
}
</style>
