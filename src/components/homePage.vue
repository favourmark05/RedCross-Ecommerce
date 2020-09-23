<template>
<div>
<navbar/>
<div class="display">
    <div></div>
</div>
<portfolio/>
<trendingArt/>
<aboutUs/>
<footerSec/>
</div>
</template>

<script>
import trendingArt from '@/components/sections/trendingArt.vue'
import aboutUs from '@/components/sections/aboutUs.vue'
import footerSec from '@/components/footerSec.vue'
export default {
  components: {
    trendingArt,
    aboutUs,
    footerSec
  }

}
</script>
<style scoped>
.display{
    background-image: url('../assets/images/test1.jpg');
    height:100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    border-style: double;
    border: 2px solid red;
    /* padding: 0 auto; */
}

hr{
    color: white !important;
    border: 4px solid white;
}
</style>
