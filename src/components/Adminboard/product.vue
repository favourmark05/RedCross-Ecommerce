<template>
  <div class="productPage">
    <h1 class="text-center">product</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">product name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter product name"
          v-model="product.productName"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Product Price</label>
        <input
          type="number"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Enter product Price"
          v-model="product.productPrice"
        />
      </div>
      <button class="btn btn-danger" @click.prevent="registerProduct()">Submit</button>
    </form>
    <hr>
    <table class="table">
  <thead>
    <tr>
      <!-- <th scope="col">#</th> -->
      <th scope="col">Product Name</th>
      <th scope="col">Product Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(product, productID) in products" :key="productID">
      <!-- <th scope="row"> . </th> -->
      <td> {{ product.productName }}</td>
      <td> {{ product.productPrice }}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import { db } from '../../firebase'

export default {
  name: 'productPage',
  data () {
    return {
      products: [],
      product: {
        productName: null,
        productPrice: null
      }
    }
  },
  methods: {
    registerProduct () {
      db.collection('products').add(this.product)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
          this.readData()
          this.product.productName = ''
          this.product.productPrice = ''
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
    },
    readData () {
      this.products = []
      db.collection('products').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.products.push(doc.data())
        })
      })
    }
  },
  reset () {
    // Object.assign(this.$data, this.$options.data.apply(this))
  },
  created () {
    this.readData()
  }
}
</script>
