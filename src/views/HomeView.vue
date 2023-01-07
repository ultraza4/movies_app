<template>
  <div class="home">
    <Banner :banner = "bannerMovie"/>
  </div>
</template>

<script>
import axios from 'axios';
import Banner from "@/components/Banner.vue"

export default {
  name: 'HomeView',
  components: {
    Banner
  },
  data() {
    return {
      movies: {},
      bannerMovie: {},
    }
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        this.movies = response.data.results
      } catch (error) {
        console.log(error)
      }
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    }
  },
  mounted() {
    this.fetchMovies();
  },
  watch: {
    movies() {
      this.bannerMovie = this.movies[this.getRandomInt(0, this.movies.length - 1)];
    },
  }
}
</script>

<style>
</style>
