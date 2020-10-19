<template>
    <div class="cartPreview">
        <navbar></navbar>
        <gNav></gNav>
        <h1 class="navbar-brand pl-4">Shop Cart</h1>
        <div class="container pt-3">
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
                        <tr v-for="item in this.$store.state.cart" :key="item">
                        <!-- <th scope="row">1</th> -->
                        <td>
                            <img :src="item.productImage" alt="" srcset="" class="itemImage">
                        </td>
                        <td class="tdata"> {{ item.productName }} </td>
                        <td class="tdata"> $ {{ item.productPrice }} </td>
                        <td class="tdata"> {{ item.productQuantity }} </td>
                        <td class="tdata"> $ {{ item.productPrice }} </td>
                        <td class="tdata"></td>
                        </tr>
                    </tbody>
            </table>
            <router-link to="sidebar" class="table-router">CONTINUE SHOPPING</router-link>
        </div>
        <div class="container py-5">
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
    color: gray;
}
.table-router{
    text-decoration: none;
    color: gray;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.table-router:hover{
    color: white;
    background-color: gray;
    /* border-radius: 30%; */
    padding: 4px 4px;
}
.itemImage{
    height: 6rem;
    width: 6rem;
}
.tdata{
    padding: 3rem 0;
}
</style>
