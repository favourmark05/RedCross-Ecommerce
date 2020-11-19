<template>
    <div class="profile">
            <div class="card col-sm-10">
                <h5 class="card-header">Update Your Profile</h5>
                    <div class="card-body">
                        <form>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                        <label for="fullName">Full Name</label>
                                                        <input type="text" class="form-control" v-model="profile.fullName" id="fullName">
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                        <label for="phoneNumber">Phone Number</label>
                                                        <input type="number" class="form-control" v-model="profile.phone" id="phoneNumber">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputAddress">Mailing Address</label>
                                                        <input type="text" class="form-control" id="inputAddress" v-model="profile.mailAdd" placeholder="1234 Main St">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputAddress2">Home Address </label>
                                                        <input type="text" class="form-control" id="inputAddress2" v-model="profile.homeAdd" placeholder="Apartment, studio, or floor">
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-4">
                                                        <label for="inputCity">Country</label>
                                                        <input type="text" v-model="profile.country" class="form-control" id="inputCity">
                                                        </div>
                                                        <div class="form-group col-md-4">
                                                        <label for="inputCity">State</label>
                                                        <input type="text" v-model="profile.state" class="form-control" id="inputCity">
                                                        </div>
                                                        <div class="form-group col-md-4">
                                                        <label for="inputCity">City</label>
                                                        <input type="text" v-model="profile.city" class="form-control" id="inputCity">
                                                        </div>
                                                        <div class="form-group col-md-2">
                                                        <label for="inputZip">Zip Code</label>
                                                        <input type="text" class="form-control" v-model="profile.zipCode" id="inputZip">
                                                        </div>
                                                    </div>
                                                    <button type="submit" @click.prevent="saveChanges" class="btn btn-primary">Save</button>
                                                </form>
                    </div>
            </div>
    </div>
</template>

<script>
import { db } from '../../firebase'
export default {
  data () {
    return {
      profiles: {
        fullName: null,
        phone: null,
        mailAdd: null,
        homeAdd: null,
        country: null,
        state: null,
        city: null,
        zipCode: null
        // photoUrl: null
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
      profile: db.collection('profiles').doc(user.uid)
    }
  },
  methods: {
    saveChanges () {
      this.$firestore.profile.update(this.profile)
      this.$toasted.success('Details updated successfully', { icon: { name: 'check' } })
      this.profile = {}
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
