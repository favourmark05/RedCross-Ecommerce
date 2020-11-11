<template>
    <div>
        <footer >
            <div class="footerContent pt-4">
            <hr class="style-eight py-4"><hr class="style-eight py-4"><hr class="style-eight py-4">
            </div>
            <div class="text-center foot">
            <div class="col">
              <router-link to="/contactUs">Contact Us</router-link>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of use</a>
              <a href="#">FAQ</a>
            </div>
            <div class="col py-4">
              <i class="fab fa-cc-mastercard"></i>
              <i class="fab fa-cc-paypal"></i>
              <i class="fab fa-cc-visa"></i>
            </div>
            <div class="col pb-4 copy">
                <p class="text-dark">&copy; {{ new Date().getFullYear() }} RaffiaCityHub</p>
            </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  data () {
    return {
      date: ''
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.foot{
    background-color: black;
    /* position: fixed; */
    /* bottom: 0px; */
}
hr.style-eight {
  overflow: visible; /* For IE */
  padding: 0;
  display: block;
  margin: 0 auto;
  width: 60%;
  border: none;
  border-top: medium double rgb(92, 90, 90);
  color: rgb(94, 88, 88);
  text-align: center;
}
hr.style-eight:after {
  /* content: "\002665"; */
  display: inline-block;
  position: relative;
  top: -1.3em;
  font-size: 3.5em;
  padding: 0 0.25em;
  /* background: white; */
}
footer{
    /* position: fixed; */
    /* bottom: -1.5rem; */
    width: 100%;
    z-index: 10;
}
.footerContent{
    display: flex;
    background-color: black;
}
.copy > p {
    color: white;
}
.col > a {
  padding: 0 8px;
  text-decoration: none;
  color: white;
}
.col > i {
  padding: 0 8px;
  font-size: 2rem;
}
.col > i:hover{
  cursor: pointer;
  color: white;
}
</style>
