<template>
  <div class="productPage">
    <h1 class="text-center text-muted pb-3">Add New Product</h1>
    <!-- =============== create product ======== -->
    <form>
      <div class="form-row">
    <div class="form-group col-md-6">
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
    <div class="form-group col-md-6">
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
  <div class="form-group">
    <label for="productTags">Product Tags</label>
    <input type="text" class="form-control" v-model="product.productTag" id="productTags" placeholder="Tags">
  </div>
  <div class="form-group">
    <label for="productDescription">Product Description</label>
    <textarea class="form-control" v-model="product.productDescription" id="productDescription" rows="5"></textarea>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="productImage">Product Image</label>
    <input type="file" class="form-control-file" @change="uploadImage()" id="productImage" accept="image/*"/>
    </div>
  </div>
      <button class="btn btn-success float-right " @click.prevent="registerProduct()" id="btSubmit" >Add Product</button>
    </form>

    <!-- =============== end of create product ============ -->
<div class="table-responsive pt-4">
      <hr>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Product Price</th>
      <th scope="col">Product Tag</th>
      <th scope="col">Desscription</th>
      <th scope="col">Images</th>
      <th scope="col">Modify</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(product, productID) in products" :key="productID">
      <td> {{ product.productName }}</td>
      <td> $ {{ product.productPrice }}</td>
      <td> {{ product.productTag }}</td>
      <td> {{ product.productDescription }}</td>
      <td> {{ product.productImage }}</td>
      <td>
        <button @click="editProduct(product)" class="btn btn-primary" data-toggle="modal" data-target="#edit">Edit</button>
        <button @click="deleteProduct(product)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
</div>
      <!-- ========== for the edit modal =========== -->
      <!-- Modal -->
        <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editLabel">Edit Product</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <!-- ===== the form ==== -->
                <div class="form-row">
    <div class="form-group col-md-6">
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
    <div class="form-group col-md-6">
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
  <div class="form-group">
    <label for="productTags">Product Tags</label>
    <input type="text" class="form-control" v-model="product.productTag" id="productTags" placeholder="Tags">
  </div>
  <div class="form-group">
    <label for="productDescription">Product Description</label>
    <textarea class="form-control" v-model="product.productDescription" id="productDescription" rows="5"></textarea>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="productImage">Product Image</label>
    <input type="file" class="form-control-file" @change="uploadImage()" id="productImage" accept="image/*"/>
    </div>
  </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="updateProduct(product)" data-dismiss="modal">Save changes</button>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import { db } from '../../firebase'
import Swal from 'sweetalert2'

export default {
  name: 'productPage',
  data () {
    return {
      products: [],
      product: {
        productName: null,
        productPrice: null,
        productTag: null,
        productDescription: null,
        productImage: null
      },
      activeItem: null
    }
  },
  firestore () {
    return {
      products: db.collection('products')
    }
  },
  methods: {
    updateProduct () {
      this.$firestore.products.doc(this.product.id).update(this.product)
      this.product = {}
      this.$toasted.success('Product updated successfully', { icon: { name: 'check' } })
    },
    editProduct (product) {
      this.product = product
    },
    deleteProduct (doc) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$firestore.products.doc(doc['.key']).delete()
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    },
    registerProduct () {
      this.$firestore.products.add(this.product)
      this.product = {}
      this.$toasted.success('Product created successfully', { icon: { name: 'check' } })
    },
    readData () {

    }
  },
  reset () {
  },
  created () {
  }
}
</script>

<style scoped>
td > button {
  margin: 0 1rem;
}
</style>
