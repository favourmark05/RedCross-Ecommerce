<template>
    <div>
        <navbar></navbar>
        <div class="cover pt-5">
            <div class="content container">
                <div class="col-sm-8 pt-5">
                    <h1 class="pt-3">Oriọna</h1>
                    <!-- <h5 class="text-title text-white">About Us</h5> -->
                    <p class="text-white">
                        Oriọna is an online Arts and Craft gallery.

                        Want to know what makes us distinctive?

                        Here's an art gallery that is motivated by Charity.

                        With an overwhelming virtual presence, we exhibit the best of
                        arts pieces from renowned and budding Artists from all over the
                        world while s percentage of the proceeds are donated to Charity through charitable Organizations.
                    </p>
                </div>
                <div class="col-sm-4"></div>
                <!-- <h1>Oriona</h1> -->
            </div>
        </div>
        <h1 class="text-center text-white pt-3">About Us</h1>
        <hr class="text-white">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.cover{
    background-image: linear-gradient(rgb(10,10,10,0.4),rgb(10,10,10,0.4),rgb(10,10,10,0.4)), url('../../assets/oil.jpg');
    background-size: cover;
    height: 70vh;
}
.col-sm-8 > h1 {
    background-color: #c9c137;
    background-image: linear-gradient(4deg, #d88921, #c56b16);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-size: 90px;
    font-family: 'Anton', sans-serif;
}
.col > p {
    /* width: 35rem; */
    font-size: 4vw;
}
</style>
