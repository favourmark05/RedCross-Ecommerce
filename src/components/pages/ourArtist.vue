<template>
    <div>
        <navbar></navbar>
        <h1 class="text-center text-white ">Meet-Our-Artists</h1>
        <div class="container">
            <div class="row row-cols-3">
                <div class="card mb-3 mx-2" style="max-width: 350px;" v-for="(Artist, index) in Artists " :key="index.id">
                    <div class="row no-gutters">
                        <!-- <div class="col-sm-4"></div> -->
                        <div class="col-md-4" v-for="(image, index) in Artist.artistImage" :key="index">
                        <img :src="image" class="card-img artistDP" alt="...">
                        </div>
                        <div class="col-md-8 pl-4">
                        <div class="card-body">
                            <h5 class="card-title"> {{ Artist.name }} </h5>
                            <p class="card-text"> {{ Artist.shortBio }} </p>
                            <p class="card-text"> {{ Artist.country }} </p>
                            <p class="card-text"> {{ Artist.email }} </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { db } from '../../firebase'
export default {
  data () {
    return {
      Artists: []
    }
  },
  firestore () {
    return {
      Artists: db.collection('Artists')
    }
  }
}
</script>
<style scoped>
h1{
    font-family: 'Monoton', cursive;
    padding-top: 7rem;
}
.artistDP{
    height: 15rem;
    width: 10rem !important;
}
</style>
