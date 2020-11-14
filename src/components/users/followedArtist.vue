<template>
    <div>
        <div v-for="(person, index) in this.$store.state.follow" :key="index">
            <h1> {{ person.artistName }} </h1>
            <h1> {{ person.artistId }} </h1>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
