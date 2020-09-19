<template>
  <div class="productPage">
    <h1 class="text-center">product</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">product name</label>
        <input
          type="text"
          class="form-control"
          id="inputProduct"
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
          id="inputPrice"
          placeholder="Enter product Price"
          v-model="product.productPrice"
        />
      </div>
      <button class="btn btn-danger" @click.prevent="registerProduct()" id="btSubmit" :disabled="!product.productPrice">Submit</button>
    </form>
<div class="table-responsive">
      <hr>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Product Price</th>
      <th scope="col">Modify</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(product, productID) in products" :key="productID">
      <td> {{ product.data().productName }}</td>
      <td> {{ product.data().productPrice }}</td>
      <td>
        <button @click="editProduct()" class="btn btn-primary">Edit</button>
        <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
</div>
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
    deleteProduct (doc) {
      if (confirm('are you sure')) {
        db.collection('product').doc('doc').delete().then(() => {
          console.log('Document successfully deleted!')
        // alert(doc)
        }).catch((error) => {
          console.error('Error removing document: ', error)
        })
        // alert(doc)
      } else {

      }
    },
    registerProduct () {
      db.collection('products').add(this.product)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
          this.readData()
          this.product = {}
          this.$toasted.success('Product created successfully', { icon: { name: 'check' } })
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
    },
    readData () {
      this.products = []
      db.collection('products').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.products.push(doc)
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

<style scoped>
td > button {
  margin: 0 1rem;
}
</style>
