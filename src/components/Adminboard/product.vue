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
    <input type="text" class="form-control" @keyup.188="addTag()" v-model="tag" id="productTags" placeholder="Tags">
    <ul class="tag-list">
      <li v-for="(tag, tagList) in product.productTags" :key="tagList">{{ tag }}</li>
    </ul>
  </div>
  <div class="form-group">
    <label for="productDescription">Product Description</label>
    <vue-editor v-model="product.productDescription"></vue-editor>
    <!-- <textarea class="form-control" v-model="product.productDescription" id="productDescription" rows="5"></textarea> -->
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="productImage">Product Image</label>
    <input type="file" class="form-control-file" @change="uploadImage" id="productImage" accept="image/*"/>
    </div>
  </div>
            <div class="form-group d-flex py-3">
                <div  v-for="(image, images) in product.productImage" :key="images">
                        <img :src="image" alt="" srcset="" class="disImage img-fluid p-2">
                        <span class="deleteImg" @click="deleteImg(image,images)">X</span>
                </div>
              </div>
      <button class="btn btn-success float-right " @click.prevent="registerProduct()" id="btSubmit" :disabled="!product.productName || !product.productPrice || !product.productDescription">Add Product</button>
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
      <td> {{ product.productTags }}</td>
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
              <input type="text" class="form-control" @keyup.188="addTag()" v-model="tag" id="productTags" placeholder="Tags">
              <ul class="tag-list">
                <li v-for="(tag, tagList) in product.productTags" :key="tagList">{{ tag }}</li>
              </ul>
            </div>
            <div class="form-group">
              <label for="productDescription">Product Description</label>
              <vue-editor v-model="product.productDescription"></vue-editor>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="productImage">Product Image</label>
              <input type="file" class="form-control-file" @change="uploadImage" id="productImage" accept="image/*"/>
              </div>
            </div>
            <div class="form-group d-flex ">
              <div  v-for="(image, images) in product.productImage" :key="images">
                      <img :src="image" alt="" srcset="" class="disImage img-fluid p-2">
                      <span class="deleteImg" @click="deleteImg(image,images)">X</span>
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
import { VueEditor } from 'vue2-editor'
import { db, st } from '../../firebase'
import Swal from 'sweetalert2'
// import { st } from 'firebase/storage'

export default {
  components: {
    VueEditor
  },
  name: 'productPage',
  data () {
    return {
      products: [],
      product: {
        productName: null,
        productPrice: null,
        productTags: [],
        productDescription: null,
        productImage: []
      },
      activeItem: null,
      tag: null
    }
  },
  firestore () {
    return {
      products: db.collection('products')
    }
  },
  methods: {
    deleteImg (img, images) {
      const image = st.refFromURL(img)
      this.product.productImage.splice(images, 1)
      image.delete().then(() => {
        console.log('image deleted')
      }).catch(function (error) {
        console.log('error occured', error)
      })
    },
    uploadImage (e) {
      if (e.target.files[0]) {
        var file = e.target.files[0]
        var storageRef = st.ref('products/' + file.name)
        const uploadTask = storageRef.put(file)

        uploadTask.on('state_changed', (snapshot) => {
        }, (error) => {
        // Handle unsuccessful uploads
          console.log(error)
        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.product.productImage.push(downloadURL)
            console.log('File available at', downloadURL)
          })
        })
      }
    },
    addTag () {
      this.product.productTags.push(this.tag)
      this.tag = ''
    },
    updateProduct () {
      this.$firestore.products.doc(this.product.id).update(this.product)
      this.product = {}
      this.$toasted.success('Product updated successfully', { icon: { name: 'check' } })
    },
    editProduct (product) {
      this.product = product
      // this.product = {}
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
          this.$firestore.products.doc(doc.id).delete()
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
  margin: 0 0.5rem;
}
.tag-list > li {
  text-decoration: none;
  list-style-type: none;
  display: inline-block;
  padding: 0 3px;
}
.disImage{
  height: 10rem;
  width: 10rem;
}
.deleteImg {
  position: relative;
  top: -14;
  left: -2px;
  cursor: pointer;
  color: red;
  background-color: white;
  border: 100%;
}
</style>
