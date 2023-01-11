<template>
    <div class="latest">
        <MoviesList :movies="latestMovies" />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import MoviesList from '@/components/MoviesList.vue'

export default {
    components: {
        MoviesList
    },
    methods: {
        ...mapActions({
            fetchLatestMovies: 'latestMovies/fetchLatestMovies'
        }),
    },
    computed: {
        ...mapState({
            latestMovies: state => state.latestMovies.latestMovies
        }),
    },
    mounted() {
        this.fetchLatestMovies();
    },
}

</script>

<style scoped>
.latest {
    margin-top: 100px;
}
</style>
