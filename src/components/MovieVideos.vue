<template>
   <div v-if="movieVideosLength()" class="movie-videos-wrapper">
      <h3>Videos related to the movie</h3>
      <div class="movie-videos">
         <div class="video" v-for="video in movieVideos">
            <iframe :src='videoUrl(video.key)' frameborder="0" allowfullscreen />
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
         movieVideos: [],
      }
   },
   methods: {
      async fetchMoviePictures(id) {
         try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            this.movieVideos = response.data.results.slice(0, 3);
            console.log(this.movieVideos.length);
         } catch (error) {
            console.log(error);
         }
      },
      movieVideosLength() {
         return this.movieVideos.length
      },
      videoUrl(key) {
         return `https://www.youtube.com/embed/${key}`
      }
   },
   watch: {
      '$route.params.id': {
         handler: function (id) {
            this.fetchMoviePictures(id);
         },
         deep: true,
         immediate: true
      }
   }
}
</script>

<style scoped>
.movie-videos-wrapper {
   padding: 15px 130px 20px 130px;
   display: grid;
   grid-template-rows: 1fr 8fr;
   background-color: inherit;
   justify-items: center;
   font-family: inherit;
   color: white;
   gap: 10px;
}

.movie-videos {
   display: grid;
   grid-template-columns: 2fr 2fr 2fr;
   justify-items: center;
   gap: 15px;
}

.video {
   width: 100%;
   display: grid;
   ;
   justify-content: center;
   justify-items: center;
}

.video span {
   margin-top: 10px;
   text-align: center;
}

@media only screen and (max-device-width: 480px){
   .movie-videos-wrapper {
   padding: 10px 20px 20px 20px;
   display: grid;
   grid-template-rows: 0.5fr 8fr;
   background-color: inherit;
   justify-items: center;
   font-family: inherit;
   color: white;
   gap: 10px;
}
   .movie-videos {
   display: flex;
   flex-direction: column;
   justify-items: center;
   gap: 15px;
}
}
</style>