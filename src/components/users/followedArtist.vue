<template>
    <div>
        <div class="car py-3 " v-for="(person, index) in this.$store.state.follow" :key="index">
            <img :src="person.artistImage" class="personImage">
            {{ person.artistName }}
            <button class="btn btn-danger" @click="$store.commit('removeFrom', person)"> unfollow</button>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
img{
    height: 5rem !important;
    width: 5rem !important;
    border-radius: 100%;
}
</style>
