<template>
    <div class="followArtist">
             <button class="btn btn-primary float-right" v-show="auth.currentUser" @click="follow()"> Follow <i class="fas fa-user-plus"></i> </button>
    </div>
</template>

<script>
export default {
  name: 'followArtist',
  props: {
    name: String,
    price: String,
    pId: String,
    image: String
    // tags: [Number, String]
  },
  data () {
    return {
      Artist: [],
      person: {
        artistName: this.name,
        artistId: this.pId,
        artistImage: this.image
      }
    }
  },
  methods: {
    follow () {
      var Artist = 'Artist.id'
      var person = this.pId
      if (Artist === person) {
        this.$toasted.success('Already followed', { icon: { name: 'check' } })
        // this.$router.replace('/ourArtist')
      } else {
        this.$store.commit('followArtist', this.person)
        this.$router.push('/followedArtist')
      }
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
.btn-primary{
  background-color: orangered !important;
  border: orangered;
}
</style>
