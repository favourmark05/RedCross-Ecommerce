<template>
    <div>
        <div>
            <div class="container" v-if="Artist">
                <h1 class="text-white"> {{ Artist.name }} </h1>
            </div>
        </div>
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

</style>
