<template>
    <div>
        <div class="header pb-3">
            <h1>Profile Settings</h1>
            <p>change your profile settings here</p>
        </div>
        <!-- <div class="settings"> -->
            <!-- <div class="row"> -->
            <div class="list-group profiles" id="list-tab" role="tablist">
                <button class="btn btn-primary btn1" id="list-Profile-list" data-toggle="list" href="#list-Profile" role="tab" aria-controls="Profile">Profiles</button>
                <button class="btn btn-primary btn2" id="list-account-list" data-toggle="list" href="#list-account" role="tab" aria-controls="account">Account Settings</button>
            </div>
            <div class="col-12">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="list-Profile" role="tabpanel" aria-labelledby="list-Profile-list">
                            <form>
                                <div class="form-row pt-5">
                                    <div class="form-group col-md-6">
                                    <label for="fullName">fullName</label>
                                    <input type="text" class="form-control" id="fullName">
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="phoneNumber">phoneNumber</label>
                                    <input type="number" class="form-control" id="phoneNumber">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress2">Address 2</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                    <label for="inputState">country</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                    </div>
                                    <div class="form-group col-md-4">
                                    <label for="inputState">State</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                    </div>
                                    <div class="form-group col-md-4">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" id="inputCity">
                                    </div>
                                    <div class="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" class="form-control" id="inputZip">
                                    </div>
                                </div>
                                <!-- <div class="form-group">
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                    <label class="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                    </div>
                                </div> -->
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="list-account" role="tabpanel" aria-labelledby="list-account-list">na like so we see account ooo</div>
                    </div>
            </div>
            <!-- </div> -->
        <!-- </div> -->
    </div>
</template>

<style scoped>
.btn1, .btn2 {
    margin: 0 10px;
}
.profiles{
    display: flex !important;
    /* justify-content: space-evenly !important; */
    flex-direction: row !important;
}
</style>
