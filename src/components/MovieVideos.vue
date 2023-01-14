<template>
   <div class="movie-videos-wrapper">
      <h3>Videos related to the movie</h3>
      <div class="movie-videos">
         <div class="video" v-for="video in movieVideos">
            <iframe :src='videoUrl(video.key)' frameborder="0" />
            <span>{{ video.name }}</span>
         </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   data() {
      return {
         movieVideos: []
      }
   },
   props: {
      movieId: {
         type: Number,
         required: true
      }
   },
   methods: {
      async fetchMoviePictures() {
         try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.movieId}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            this.movieVideos = response.data.results.slice(0, 6);
            console.log(this.movieVideos);
         } catch (error) {
            console.log(error);
         }
      },
      videoUrl(key) {
         return `https://www.youtube.com/embed/${key}`
      }
   },
   mounted() {
      this.fetchMoviePictures();
   }
}
</script>

<style scoped>
.movie-videos-wrapper {
   padding-top: 15px;
   padding-bottom: 20px;
   display: grid;
   grid-template-rows: 1fr 8fr;
   background-color: inherit;
   justify-items: center;
   font-family: inherit;
   color: white;
   gap: 10px
}

.movie-videos {
   display: grid;
   grid-template-columns: 2fr 2fr 2fr;
   margin: 0px 200px;
   justify-items: center;
   gap: 15px;
}
.video {
   width: 100%;
   display: grid;
   grid-template-rows: 8fr 2fr;
   justify-content: center;
   justify-items: center;
}
.video span {
   margin-top: 10px;
}
</style>