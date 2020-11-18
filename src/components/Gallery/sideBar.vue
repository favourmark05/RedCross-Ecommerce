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
                    <h3 class="text-white text-centr">Categories</h3>
                    <div class="list-group" id="list-tab" role="tablist">
                    <button type="button" class="btn btn-primary btn-lg btn-block list-group-item-action active" id="list-all-list" data-toggle="list" href="#all" role="tab" aria-controls="home">All</button>
                    <button type="button" class="btn btn-secondary btn-lg btn-block btn-lg btn-block list-group-item-action " id="list-person-list" data-toggle="list" href="#person" role="tab" aria-controls="home">Person</button>
                    <button type="button" class="btn btn-secondary btn-lg btn-block btn-lg btn-block list-group-item-action " id="list-street-list" data-toggle="list" href="#street" role="tab" aria-controls="home">street</button>
                    <button type="button" class="btn btn-secondary btn-lg btn-block btn-lg btn-block list-group-item-action " id="list-nature-list" data-toggle="list" href="#nature" role="tab" aria-controls="home">Nature</button>
                    </div>
                  </div>
                  <div class="col-sm-10">
                    <div class="tab-content" id="nav-tabContent">
                      <!-- this displays all items in the art gallery -->
                      <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="list-all-list">
                    <div class="row">
                    <div class="col-md-4  shadow" v-for="(product, index) in products" :key="index.id">
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
                      </div>
                      <!-- end of all -->

                      <!-- start of second -->
                      <div class="tab-pane fade show active" id="person" role="tabpanel" aria-labelledby="list-person-list">
                    <div class="row">
                    <div class="col-md-4  shadow" v-for="(product, index) in products" :key="index.id">
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
                      </div>
                      <!-- end of second -->

                      <!-- start of third -->
                      <div class="tab-pane fade show active" id="street" role="tabpanel" aria-labelledby="list-street-list">
                    <div class="row">
                    <div class="col-md-4  shadow" v-for="(product, index) in products" :key="index.id">
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
                      </div>
                      <!-- end of third -->

                      <!-- start of fourth -->
                      <div class="tab-pane fade show active" id="nature" role="tabpanel" aria-labelledby="list-nature-list">
                    <div class="row">
                    <div class="col-md-4  shadow" v-for="(product, index) in products" :key="index.id">
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
                      </div>
                      <!-- end of fourth -->
                    </div>
                  </div>
                </div>
            </div>
            <!-- ========================= End of side bar ================= -->
            <footerSec/>
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
