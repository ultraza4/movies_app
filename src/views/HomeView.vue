<template>
  <div class="home">
    <Banner :banner="bannerMovie" />
    <MoviesListVue :movies="popularMovies" :discription="true" />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import MoviesListVue from "@/components/MoviesList.vue";
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    Banner,
    MoviesListVue
  },
  methods: {
    ...mapActions({
      fetchPopularMovies: 'home/fetchPopularMovies',
    }),
  },
  computed: {
    ...mapState({
      popularMovies: state => state.home.popularMovies,
      bannerMovie: state => state.home.bannerMovie
    }),
    ...mapGetters({
      getPopularMovies: 'home/getPopularMovies',
    })
  },
  mounted() {
    this.fetchPopularMovies();
  },
}
</script>

<style>

</style>
