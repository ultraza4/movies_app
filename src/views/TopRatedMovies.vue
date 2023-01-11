<template>
  <div class="top-rated">
    <div class="input-wrapper">
      <my-input 
        placeholder="Search for the movie"
        />
    </div>
    <MoviesList :movies="topRatedMovies"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import MoviesList from '@/components/MoviesList.vue';
import MyInput from '@/components/UI/myInput.vue';

export default {
  components: {
    MoviesList,
    MyInput
  },
  methods: {
    ...mapActions({
      fetchTopRatedMovies: 'topRated/fetchTopRatedMovies',
    }),
    ...mapMutations({
      setSearchQuery: 'topRated/setSearchQuery'
    })
  },
  computed: {
    ...mapState({
      topRatedMovies: state => state.topRated.topRatedMovies,
      searchQuery: state => state.topRated.searchQuery
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
.input-wrapper{
  display: flex;
  justify-content: center;
}
.top-rated {
  margin-top: 100px;
}
</style>
