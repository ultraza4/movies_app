<template>
    <div class="movies-list">
        <MovieCardItemVue v-for="movie in movies" :movie=movie :key="movie.title" :discr="discription" />
    </div>
</template>

<script>
import MovieCardItemVue from './MovieCardItem.vue';

export default {
    components: {
        MovieCardItemVue
    },
    props: {
        movies: {
            type: Object
        },
        discription: {
            type: Boolean
        }
    }
}
</script>

<style scoped>
.movies-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin: 0px 100px;
}

@media only screen and (max-device-width: 480px) {
    .movies-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
        margin: 0px 20px;
    }
}
</style>