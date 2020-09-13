<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control" required
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small
                id="emailHelp"
                class="form-text text-muted"
              >We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" required id="exampleInputPassword1" />
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <router-link to="/admin" class="btn btn-danger" type="submit">Login</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  background-image: url("https://wpengine.com/wp-content/uploads/2015/02/security-compressor-1000x628.jpg");
  background-size: cover;
  height: 100vh;
}
.container{
    padding: 15rem 10rem;
    /* background-color: white; */
}
.col{
    background-color: white;
    padding: 4rem 4rem;
    border-radius: 2rem;
}
</style>
