<template>
  <div class="home">
    <Banner :banner = "bannerMovie"/>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    Banner
  },
  methods: {
    ...mapActions({
      fetchMovies: 'home/fetchMovies',
    }),
  },
  computed:{
    ...mapState({
      movies: state => state.home.movies,
      bannerMovie: state => state.home.bannerMovie
    }),
    ...mapGetters({
      getMovies: 'home/getMovies',
    })
  },
  mounted() {
    this.fetchMovies();
  },
}
</script>

<style>
</style>
