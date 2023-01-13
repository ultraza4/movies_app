<template>
    <div class="latest">
        <MoviesList :movies="latestMovies" />
        <Pagination :totalPage="totalPage" :selectedPage="currentPage" @currentPage="fetchNewPage" />
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import MoviesList from '@/components/MoviesList.vue';
import Pagination from '@/components/Pagination.vue';

export default {
    components: {
        MoviesList,
        Pagination
    },
    methods: {
        ...mapActions({
            fetchLatestMovies: 'latestMovies/fetchLatestMovies',
        }),
        ...mapMutations({
            setCurrentPage: 'latestMovies/setCurrentPage',
        }),
        fetchNewPage(page) {
            this.setCurrentPage(page);
            this.fetchLatestMovies();
            this.scrollToTop();
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        },
    },
    computed: {
        ...mapState({
            latestMovies: state => state.latestMovies.latestMovies,
            currentPage: state => state.latestMovies.currentPage,
            totalPage: state => state.latestMovies.totalPage
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
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
