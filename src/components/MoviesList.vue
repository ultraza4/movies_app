<template>
    <div class="movies-list">
        <MovieCardItemVue  
            v-for="movie in movies" 
            :movie = movie 
            :key="movie.title"/>
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
        }
    }
}
</script>

<style>
.movies-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin: 0px 40px;
}
</style>