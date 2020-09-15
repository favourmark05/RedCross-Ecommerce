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
  </div>
</template>

<script>
import { db } from '../../firebase'

export default {
  name: 'productPage',
  data () {
    return {
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
          this.product = ''
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
    }
  },
  reset () {
    // Object.assign(this.$data, this.$options.data.apply(this))
  }
}
</script>
