<template>
    <div class="profile">
            <div class="card col-sm-10">
                <h5 class="card-header">Update Your Profile</h5>
                    <div class="card-body">
                        <form>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                        <label for="fullName">Full Name</label>
                                                        <input type="text" class="form-control" v-model="artistProfiles.fullName" id="fullName">
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                        <label for="phoneNumber">Phone Number</label>
                                                        <input type="number" class="form-control" v-model="artistProfiles.phone" id="phoneNumber">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputAddress">Mailing Address</label>
                                                        <input type="text" class="form-control" id="inputAddress" v-model="artistProfiles.mailAdd" placeholder="1234 Main St">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputAddress2">Home Address </label>
                                                        <input type="text" class="form-control" id="inputAddress2" v-model="artistProfiles.homeAdd" placeholder="Apartment, studio, or floor">
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-4">
                                                        <label for="inputCity">Country</label>
                                                        <input type="text" v-model="artistProfiles.country" class="form-control" id="inputCity">
                                                        </div>
                                                        <div class="form-group col-md-4">
                                                        <label for="inputCity">State</label>
                                                        <input type="text" v-model="artistProfiles.state" class="form-control" id="inputCity">
                                                        </div>
                                                        <div class="form-group col-md-4">
                                                        <label for="inputCity">City</label>
                                                        <input type="text" v-model="artistProfiles.city" class="form-control" id="inputCity">
                                                        </div>
                                                        <div class="form-group col-md-2">
                                                        <label for="inputZip">Zip Code</label>
                                                        <input type="text" class="form-control" v-model="artistProfiles.zipCode" id="inputZip">
                                                        </div>
                                                        <div class="form-group col-md-4">
                                                            <label for="artist_Photo_Url">Artist Image</label>
                                                        <input type="file" class="form-control-file" @change="uploadImage" id="artist_Photo_Url" accept="image/*"/>
                                                        </div>
                                                    </div>
                                                    <button type="submit" @click.prevent="saveChanges" class="btn btn-primary">Save</button>
                                                </form>
                    </div>
            </div>
    </div>
</template>

<script>
import { db, st } from '../../../firebase'
export default {
  data () {
    return {
      artistProfiles: {
        fullName: null,
        phone: null,
        mailAdd: null,
        homeAdd: null,
        country: null,
        state: null,
        city: null,
        zipCode: null,
        artist_Photo_Url: null
      },
      account: {
        username: null,
        email: null,
        password: null,
        confirmPassword: null,
        uid: null,
        photoUrl: null,
        emailVerified: null
      }
    }
  },
  firestore () {
    const user = this.auth.currentUser
    return {
      artistProfiles: db.collection('artistProfiles').doc(user.uid)
    }
  },
  methods: {
    saveChanges () {
      this.$firestore.artistProfiles.update(this.artistProfiles)
      this.$toasted.success('Details updated successfully', { icon: { name: 'check' } })
      this.artistProfiles = {}
    },
    uploadImage (e) {
      if (e.target.files[0]) {
        var file = e.target.files[0]
        var storageRef = st.ref('artistProfiles/' + file.name)
        const uploadTask = storageRef.put(file)

        uploadTask.on('state_changed', (snapshot) => {
        }, (error) => {
        // Handle unsuccessful uploads
          console.log(error)
        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log(this.artistProfiles)
            console.log(downloadURL)
            this.artistProfiles.artist_Photo_Url = downloadURL
            console.log('File available at', downloadURL)
          })
        })
      }
    }
  }
}
</script>

<style scoped>
.btn1, .btn2 {
    margin: 0 10px;
}
.profiles{
    display: flex !important;
    flex-direction: row !important;
    justify-content: center;

}
.profile{
    background-color: white !important;
    height: 100vh !important;

}
.display-img{
    overflow: auto;
    overflow-x: hidden !important;
}
</style>
