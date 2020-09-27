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
      <button class="btn btn-danger" @click.prevent="registerProduct()" id="btSubmit" :disabled="!product.productPrice || !product.productName">Submit</button>
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
        <button @click="editProduct(product)" class="btn btn-primary" data-toggle="modal" data-target="#edit">Edit</button>
        <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
</div>
      <!-- ========== for the edit modal =========== -->
      <!-- Modal -->
        <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editLabel">Edit Product</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <!-- ===== the form ==== -->
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

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="updateProduct()" data-dismiss="modal">Save changes</button>
              </div>
            </div>
          </div>
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
      },
      activeItem: null
    }
  },
  methods: {
    updateProduct () {
      db.collection('products').doc(this.activeItem).update(this.product)
        .then(() => {
          this.$toasted.success('Product updated successfully', { icon: { name: 'check' } })
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error)
        })
    },
    editProduct (product) {
      this.product = product.data()
      this.activeItem = product.id
    },
    deleteProduct (doc) {
      if (confirm('are you sure')) {
        db.collection('products').doc(doc).delete().then(() => {
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
