<template>
    <div>
      <navbar></navbar>
        <div class="pt-5">
          <h1 class="navbar-brand pt-5 pl-4">Artist Portfolio</h1>
        </div>
        <div class="container" v-if="Artist">
          <div class="row">
            <div class="col-sm-8">
              <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                  <div class="col-md-4" v-for="(image, index) in Artist.artistImage" :key="index">
                    <img :src="image" class="card-img" alt="Artist image">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title" style="text-transform:uppercase"> <b>{{ Artist.name }}</b></h5>
                      <p class="card-text"> {{ Artist.shortBio }} </p>
                      <p class="card-text"><small class="text-muted"> <b>Email: </b>{{ Artist.email }} </small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card col-sm my-3  ml-3">
                  <div class="card-body">
                    <h5 class="card-title">Artist Details</h5>
                    <hr>
                    <h6><b> Country: </b> {{  }} </h6>
                    <h6><b> County / State / Region: </b> {{  }} </h6>
                    <h6><b> Specialty: </b> {{  }} </h6>
                    <h6><b> Total Art Work Displayed: </b> {{  }} </h6>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="container bg-white" v-if="Artist">
          <div class="row">
            <div class="col px-3">
              <h4 class="text-left pt-2"> <strong>Artist Bio</strong></h4>
              <hr>
              <p class="card-text"> {{ Artist.bio }} </p>
            </div>
          </div>
        </div>
        <div class="container">
          <h1 class="text-white artist text-center py-3">Artist Gallery </h1>
          <div class="row">
                  <div class="col-md-4 shadow" >
                    <div class="card product-item" v-if="Artist">
                      <div v-for="(image, index) in Artist.productImage" :key="index">
                        <img :src="image" class="card-img-top product-image">
                      </div>
                    </div>
                  </div>
          </div>
        </div>

        <!-- footer -->
        <footerSec></footerSec>
    </div>
</template>

<script>
import { db } from '../../firebase'
export default {
  data () {
    return {

    }
  },
  firestore () {
    return {
      Artists: db.collection('Artists')
    }
  },
  computed: {
    Artist () {
      let match = null
      var ArtistId = this.$route.params.ArtistId
      this.Artists.forEach(function (Artist) {
        if (Artist.id === ArtistId) {
          match = Artist
        }
      })
      return match
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
.navbar-brand{
  font-size: 3rem !important;
  font-family: 'Sacramento', sans-serif;
  color: aliceblue;
}
.card-img{
  height: 15rem !important;
}
.artist{
  font-size: 3rem !important;
  font-family: 'Sacramento', sans-serif;
  color: aliceblue;
}
</style>
