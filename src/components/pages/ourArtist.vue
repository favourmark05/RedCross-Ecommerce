<template>
    <div>
        <navbar></navbar>
        <h1 class="text-center text-white ">Meet-Our-Artists</h1>
        <div class="container">
                <!-- <h1 class="text-center text-light pb-3">Product list</h1> -->
                <div class="row">
                  <div class="col-md-4 shadow" v-for="(Artist, index) in Artists" :key="index.id">
                    <div class="card product-item">
                      <div v-for="(image, index) in Artist.artistImage" :key="index">
                        <img :src="image" class="card-img-top product-image">
                        <router-link :to="{ name: 'ArtistPreview', params: { ArtistId: Artist.id } }">
                        <h5 class="card-title px-3 pt-3" style="text-transform:uppercase"> <b>{{ Artist.name }}</b> </h5>
                        </router-link>
                        <h6 class="pl-3 card-prices"><b>Email: </b> {{ Artist.email}} </h6>
                        <followArtist
                              :image="getImages(Artist.artistImage)"
                              :images="viewImages(Artist.productImage)"
                              :name="Artist.name"
                              :email="Artist.email"
                              :country="Artist.country"
                              :p-id="Artist.id"
                        >
                        </followArtist>
                      </div>
                    </div>
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
      Artists: [],
      follows: {
        // name: this.Artists.name,
        // email: this.Artists.email
      }
    }
  },
  firestore () {
    return {
      Artists: db.collection('Artists'),
      follows: db.collection('follows')
    }
  },
  methods: {
    getImages (images) {
      return images[0]
    },
    viewImages (images) {
      return images[0]
    }
  }
}
</script>
<style scoped>
h1{
    font-family: 'Monoton', cursive;
    padding-top: 7rem;
}
.product-image{
  height: 20rem !important;
}
</style>
