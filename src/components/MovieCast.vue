<template>
    <h2 class="title">
        Cast:
    </h2>
    <div class="movie-cast_wrapper">
        <div class="cast-item" v-for="actor in movieCast" @click="$router.push(`/actor/${actor.id}`)">
            <img :src="`https://image.tmdb.org/t/p/original${actor.profile_path}`" alt="">
            <div class="cast-name">
                {{ actor.name }} as
            </div>
            <div class="cast-name">
                {{ actor.character }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            movieCast: []
        }
    },
    methods: {
        async fetchMovieCast(id) {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            this.movieCast = res.data.cast.slice(0, 8)
        }
    },
    watch: {
        '$route.params.id': {
            handler: function (id) {
                this.fetchMovieCast(id);
            },
            deep: true,
            immediate: true
        }
    }
}
</script>

<style scoped>
.title {
    text-align: center;
    margin: 15px 0px;
}

.movie-cast_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
}

.cast-item {
    display: grid;
    flex-direction: column;
    justify-items: center;
    cursor: pointer;
}

.cast-item img {
    width: 60px;
    border-radius: 10px;
    overflow: hidden;
}

.cast-name {
    text-align: center;
}
</style>