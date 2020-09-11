<template>
    <div>
        <div class="about-title text-center text-white">
    <h1 class="pt-3 display-1">AboutUs</h1>
    <p class="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid?</p>
    <hr class="style-eight py-4">
</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
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
    content: "\002665";
    display: inline-block;
    position: relative;
    top: -1.3em;
    font-size: 3.5em;
    padding: 0 0.25em;
}
.about-title > h1 {
    font-family: 'Sacramento', sans-serif;
  color:gray !important;
}
</style>
