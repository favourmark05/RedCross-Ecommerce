<template>
    <div>
        <footer >
            <div class="footerContent pt-4">
            <hr class="style-eight py-4"><hr class="style-eight py-4">
            </div>
            <div class="text-center foot">
            <div class="col">1</div>
            <div class="col">2</div>
            <div class="col pb-4 copy">
                <p>Copyright &copy; {{ new Date().getFullYear() }} RaffiaCityHub</p>
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
  border-top: medium double #fff;
  color: rgb(190, 15, 15);
  text-align: center;
}
hr.style-eight:after {
  content: "\03C8";
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
</style>
