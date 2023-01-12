<template>
  <div class="top-rated">
    <!-- <div class="input-wrapper">
      <my-input 
        placeholder="Search for the movie"
        />
    </div> -->
    <MoviesList :movies="topRatedMovies" />
    <Pagination 
      :totalPage="totalPage" 
      :selectedPage = "currentPage" 
      @currentPage ="fetchNewPage"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import MoviesList from '@/components/MoviesList.vue';
import Pagination from '@/components/Pagination.vue';
// import MyInput from '@/components/UI/myInput.vue';

export default {
  components: {
    MoviesList,
    Pagination
    // MyInput
  },
  methods: {
    ...mapActions({
      fetchTopRatedMovies: 'topRated/fetchTopRatedMovies',
    }),
    ...mapMutations({
      setSearchQuery: 'topRated/setSearchQuery',
      setCurrentPage: 'topRated/setCurrentPage'
    }),
    fetchNewPage(page) {
      this.setCurrentPage(page);
      this.fetchTopRatedMovies();
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
  margin-top: 100px;
}
</style>
