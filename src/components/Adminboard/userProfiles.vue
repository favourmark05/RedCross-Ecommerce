<template>
    <div class="profile">
        <div class="container text-cente text-center">

                        <h1>Profile Settings</h1>
                        <p>change your profile settings here</p>

        </div>
        <!-- <div class="settings"> -->
            <!-- <div class="row"> -->
            <div class="list-group profiles " id="list-tab" role="tablist">
                <button class="btn btn-primary btn1" id="list-Profile-list" data-toggle="list" href="#list-Profile" role="tab" aria-controls="Profile">Profiles</button>
                <button class="btn btn-primary btn2" id="list-account-list" data-toggle="list" href="#list-account" role="tab" aria-controls="account">Account Settings</button>
            </div>
            <div class="col-12">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="list-Profile" role="tabpanel" aria-labelledby="list-Profile-list">
                            <form>
                                <div class="form-row pt-5">
                                    <div class="form-group col-md-6">
                                    <label for="fullName">Full Name</label>
                                    <input type="text" class="form-control" v-model="profile.name" id="fullName">
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
                                    <label for="inputState">country</label>
                                    <select id="inputState" v-model="profile.country" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                    </div>
                                    <div class="form-group col-md-4">
                                    <label for="inputState">State</label>
                                    <select id="inputState" v-model="profile.state" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
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
                                <button type="submit" @click="saveChanges" class="btn btn-primary">Save</button>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="list-account" role="tabpanel" aria-labelledby="list-account-list">
                            <form>
                                <div class="form-row pt-5">
                                    <div class="form-group col-md-6">
                                    <label for="fullName">UserName</label>
                                    <input type="text" class="form-control" v-model="account.username" id="fullName">
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="email">Email Address</label>
                                    <input type="email" class="form-control" v-model="account.email" id="email">
                                    </div>
                                </div>
                                <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="newPassword">New-Password</label>
                                    <input type="password" class="form-control" id="newPassword" v-model="account.password" placeholder="">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Confirm">Confirm Password</label>
                                    <input type="password" class="form-control" id="confirm" v-model="account.confirmPassword" placeholder="">
                                </div>
                                </div>
                                <div class="form-group">
                                    <input type="file" class="form-control-file" name="image" id="avater"  accept="image/*">
                                </div>
                                <button type="submit" class="btn btn-primary float-right">update Settings</button>
                            </form>
                            </div>
                    </div>
            </div>
            <!-- </div> -->
        <!-- </div> -->
    </div>
</template>

<script>
export default {
  data () {
    return {
      profile: {
        fullName: null,
        phone: null,
        mailAdd: null,
        homeAdd: null,
        country: null,
        state: null,
        city: null,
        zipCode: null
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
  methods: {
    saveChanges () {

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
