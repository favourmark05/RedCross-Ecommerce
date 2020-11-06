<template>
    <div>
        <h1 class="text-center">ARTIST - PAGE</h1>
        <form>
          <div class="row py-3">
            <div class="col">
              <input type="text" class="form-control" placeholder="Full Name" v-model="Artist.name">
            </div>
            <div class="col">
              <input type="email" class="form-control" placeholder="email" v-model="Artist.email">
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="shortBio"> Short Bio </label>
              <textarea class="form-control" id="shortBio" rows="3" maxlength="200" v-model="Artist.shortBio"></textarea>
            </div>
            <div class="col">
              <label for="bio"> Bio </label>
              <textarea class="form-control" id="bio" rows="3" v-model="Artist.bio"></textarea>
            </div>
          </div>
          <div class="row py-3">
            <div class="col">
              <input type="text" class="form-control" placeholder="country" v-model="Artist.country">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="county / state / region" v-model="Artist.location">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="artistImage">artist-Image</label>
            <input type="file" class="form-control-file" @change="ArtistImage" id="artistImage" accept="image/*"/>
            </div>
                  <div class="form-group d-flex py-3">
                    <div  v-for="(image, images) in Artist.artistImage" :key="images">
                            <img :src="image" alt="" srcset="" class="disImage img-fluid p-2">
                            <span class="deleteImg" @click="deleteImg(image,images)">X</span>
                    </div>
                  </div>

            <div class="form-group col-md-6">
              <label for="productImage">Collection</label>
            <input type="file" class="form-control-file" @change="ProductImage" id="productImage" accept="image/*"/>
            </div>
                  <div class="form-group d-flex py-3">
                    <div  v-for="(image, images) in Artist.productImage" :key="images">
                            <img :src="image" alt="" srcset="" class="disImage img-fluid p-2">
                            <span class="deleteImg" @click="deleteImg(image,images)">X</span>
                    </div>
                  </div>
          </div>
          <button class="btn btn-success float-right" @click.prevent="registerArtist()" id="btSubmit" :disabled="!Artist.location">Add Artist</button>
        </form>

        <!-- list of Artist available -->
        <div class="table-responsive pt-4">
      <hr>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Artist Name</th>
      <th scope="col">Artist Country</th>
      <th scope="col">Artist Email</th>
      <th scope="col">Artist Location</th>
      <!-- <th scope="col">Images</th> -->
      <th scope="col">Modify</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(Artist, ArtistId) in Artists" :key="ArtistId">
      <td> {{ Artist.name }}</td>
      <td> $ {{ Artist.country }}</td>
      <td> {{ Artist.email }}</td>
      <td> {{ Artist.location }}</td>
      <!-- <td> {{ product.productImage }}</td> -->
      <td>
        <!-- <button @click="editProduct(product)" class="btn btn-primary" data-toggle="modal" data-target="#edit">Edit</button> -->
        <button @click="deleteArtist(Artist)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
</div>
    </div>
</template>

<script>
import { db, st } from '../../firebase'
import Swal from 'sweetalert2'
export default {
  name: 'artist',
  data () {
    return {
      Artists: [],
      Artist: {
        name: null,
        bio: null,
        shortBio: null,
        email: null,
        country: null,
        location: null,
        artistImage: [],
        productImage: []
      },
      activeItem: null
    }
  },
  firestore () {
    return {
      Artists: db.collection('Artists')
    }
  },
  methods: {
    registerArtist () {
      this.$firestore.Artists.add(this.Artist)
      this.Artist = {}
      // this.reset() = {}
      this.$toasted.success('Product created successfully', { icon: { name: 'check' } })
    },
    ArtistImage (e) {
      if (e.target.files[0]) {
        var file = e.target.files[0]
        var storageRef = st.ref('Artists/' + file.name)
        const uploadTask = storageRef.put(file)

        uploadTask.on('state_changed', (snapshot) => {
        }, (error) => {
        // Handle unsuccessful uploads
          console.log(error)
        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.Artist.artistImage.push(downloadURL)
            // this.productImage = ''
            console.log('File available at', downloadURL)
          })
        })
      }
    },
    ProductImage (e) {
      if (e.target.files[0]) {
        var file = e.target.files[0]
        var storageRef = st.ref('Artist/' + file.name)
        const uploadTask = storageRef.put(file)

        uploadTask.on('state_changed', (snapshot) => {
        }, (error) => {
          console.log(error)
        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.Artist.productImage.push(downloadURL)
            console.log('File available at', downloadURL)
          })
        })
      }
    },
    reset () {
      this.Artist = {
        name: null,
        bio: null,
        shortBio: null,
        email: null,
        country: null,
        location: null,
        artistImage: null,
        productImage: []
      }
    },
    deleteImg (img, images) {
      const image = st.refFromURL(img)
      this.product.productImage.splice(images, 1)
      image.delete().then(() => {
        console.log('image deleted')
      }).catch(function (error) {
        console.log('error occured', error)
      })
    },
    deleteArtist (doc) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$firestore.Artists.doc(doc.id).delete()
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  }
}
</script>

<style scoped>
h1{
    font-family: 'Monoton', cursive;
}
.disImage{
  height: 10rem;
  width: 10rem;
}
.deleteImg {
  position: relative;
  top: -14;
  left: -2px;
  cursor: pointer;
  color: red;
  background-color: white;
  border: 100%;
}
</style>
