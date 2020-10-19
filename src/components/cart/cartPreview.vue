<template>
    <div class="cartPreview">
        <navbar></navbar>
        <div class="galleryNavBar">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <h1 class="navbar-brand text-white" >Shop Cart</h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fas fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <router-link to="/userDashboard" class="nav-link active">My Account <span class="sr-only">(current)</span></router-link>
                    <a class="nav-link" href="#">CheckOut</a>
                    <a class="nav-link" href="#">Shopping Cart <i class="fas fa-shopping-cart"></i> {{ 0 }} items</a>
                    <a class="nav-link"><i class="fas fa-dollar-sign"></i> {{ 400 }}</a>
                    </div>
                </div>
                </nav>
        </div>
        <div class="container">
            <table class="table table-dark">
                    <thead>
                        <tr>
                        <!-- <th scope="col">#</th> -->
                        <th scope="col">Image</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <!-- <th scope="row">1</th> -->
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
            </table>
            <router-link to="sidebar" class="table-router">CONTINUE SHOPPING</router-link>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm">
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                            <th scope="col">CART TOTAL</th>
                            <td> {{ }} </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="col">SHIPPING</th>
                            <td> {{ }} </td>
                            </tr>
                            <tr>
                            <th scope="col">ORDER PRICE TOTAL</th>
                            <td> {{ }} </td>
                            </tr>
                        </tbody>
                    </table>
                    <router-link to="" class="float-right table-router">CHECKOUT</router-link>
                </div>
            </div>
        </div>
        <footerSec></footerSec>
    </div>
</template>

<script>
export default {
  name: 'cartPreview'

}
</script>

<style scoped>
.nav-link{
    color: rgb(138, 129, 129) !important;
    padding: 0 20px !important;
}
.fa-bars{
    color: white !important;
}
.galleryNavBar{
    padding-top:5rem;
}
.navbar-brand{
    font-size: 2.5rem !important;
}
.table-router{
    text-decoration: none;
    color: gray;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.table-router:hover{
    color: white;
}
</style>
