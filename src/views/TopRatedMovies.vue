<template>
  <div class="top-rated">
    <MoviesList :movies="topRatedMovies" />
    <Pagination :totalPage="totalPage" :selectedPage="currentPage" @currentPage="fetchNewPage" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import MoviesList from '@/components/MoviesList.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    MoviesList,
    Pagination
  },
  methods: {
    ...mapActions({
      fetchTopRatedMovies: 'topRated/fetchTopRatedMovies',
    }),
    ...mapMutations({
      setSearchQuery: 'topRated/setSearchQuery',
      setCurrentPage: 'topRated/setCurrentPage'
    }),
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    fetchNewPage(page) {
      this.setCurrentPage(page);
      this.fetchTopRatedMovies();
      this.scrollToTop();
    }
  },
  computed: {
    ...mapState({
      topRatedMovies: state => state.topRated.topRatedMovies,
      searchQuery: state => state.topRated.searchQuery,
      totalPage: state => state.topRated.totalPage,
      currentPage: state => state.topRated.currentPage,
    }),
    ...mapGetters({
      getSearchedMovies: 'topRated/getSearchedMovies'
    })
  },
  mounted() {
    this.fetchTopRatedMovies();
  },
}

</script>

<style scoped>
.input-wrapper {
  display: flex;
  justify-content: center;
}

.top-rated {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}
</style>
