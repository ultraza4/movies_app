<template>
  <div class="home">
    <img :src="this.bgImage" alt="picture">
    hello
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      movies: null,
      bannerMovie: null,
      bgImage: null
    }
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        this.movies = response.data.results
        console.log(this.movies)
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
      this.bannerMovie = this.movies[this.getRandomInt(0, this.movies.length - 1)]
      this.bgImage = `https://image.tmdb.org/t/p/original${this.bannerMovie.backdrop_path}`
    },
    // bannerMovie() {
    //   this.bgImage = `https://image.tmdb.org/t/p/original${this.bannerMovie.backdrop_path}`
    // }
  }
}
</script>
