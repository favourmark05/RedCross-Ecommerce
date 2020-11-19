<template>
    <div>
        <navbar></navbar>
        <gNav></gNav>
        <div class="container">
            <div class="caption text-center bg-dar text-white">
            <h1 class="pt-3 display-1 text-white">Gallery</h1>
            <p class="py-3">Feel the Impact of our full Art gallery</p>
            <hr class="style-eight py-4">
        </div>
        </div>

            <!-- ====================== side bar ==================== -->
                  <div class="container-fluid">
                    <h1 class="text-center text-light pb-3">Product list</h1>
                        <div class="row">
                          <div class="col-sm-2">
                            <h3 class="text-white">Categories</h3>
                            <!-- <div class="list-group" id="list-tab" role="tablist"> -->
                            <router-link to="sideBar" class="btn btn-primary btn-lg btn-block">All</router-link>
                            <router-link to="person" class="btn btn-secondary btn-lg btn-block btn-lg btn-block" >Person</router-link>
                            <router-link to="street" class="btn btn-secondary btn-lg btn-block btn-lg btn-block ">street</router-link>
                            <router-link to="nature" class="btn btn-secondary btn-lg btn-block btn-lg btn-block ">Nature</router-link>
                            <!-- </div> -->
                          </div>
                          <div class="col-sm-10">
                            <div class="row">
                              <div class="col-md-4  shadow " v-for="(product, index) in products" :key="index.id" v-show="$route.name === 'sideBar'">
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
                              </div>
                            </div>
                            <router-view></router-view>
                          </div>
                        </div>
                  </div>
                  <footerSec></footerSec>
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
