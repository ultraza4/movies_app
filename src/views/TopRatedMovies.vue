<template>
  <div class="top-rated">
    <MoviesList :movies="topRatedMovies"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import MoviesList from '@/components/MoviesList.vue';

export default {
  components: {
    MoviesList
  },
  methods: {
    ...mapActions({
      fetchTopRatedMovies: 'topRated/fetchTopRatedMovies',
    }),
  },
  computed: {
    ...mapState({
      topRatedMovies: state => state.topRated.topRatedMovies,
    }),
  },
  mounted() {
    this.fetchTopRatedMovies();
  },
}

</script>

<style scoped>
.top-rated {
  margin-top: 100px;
}
</style>
