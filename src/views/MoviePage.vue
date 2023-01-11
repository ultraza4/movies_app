<template>
   <div class="movie_page" :style="backgroundImageInlineStyle">
      <div class="movie-info-wrapper">
         <div class="movie-info">
            <div class="posterImage-wrapper">
               <img :src="posterImage" alt="" />
            </div>
            <div class="movie-description">
               <h1>{{ movie.title }}</h1>
               <p>
                  {{ movie.overview }}
               </p>
               <div class="movie-icons">
                  <div class="movie-icons-item">
                     <Icon icon="uiw:date" />
                     <span>{{ movie.release_date }}</span>
                  </div>
                  <div class="movie-icons-item">
                     <Icon icon="ic:round-star" />
                     <span>{{ Math.round(movie.vote_average) }}/10</span>
                  </div>
                  <div class="movie-icons-item">
                     <Icon icon="ion:people" />
                     <span>{{ movie.popularity }}</span>
                  </div>
                  <div class="movie-icons-item">
                     <Icon icon="ic:twotone-access-time-filled" color="white" />
                     <span>{{ movie.runtime }} min.</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios';
import getImage from '@/lib/getImage';
import { Icon } from '@iconify/vue';
export default {
   components: {
      Icon
   },
   data() {
      return {
         movieId: this.$route.params.id,
         movie: {},
         bgImage: '',
         country: ''
      }
   },
   methods: {
      async fetchMovie() {
         try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            this.movie = response.data;
            this.bgImage = getImage(this.movie.backdrop_path)
            console.log(this.movie)
         } catch (error) {
            console.log(error)
         }
      },
   },
   computed: {
      backgroundImageInlineStyle() {
         return `background-image: url(${this.bgImage})`
      },
      posterImage() {
         return getImage(this.movie.poster_path)
      },
      movieOcuntry() {
         return
      }
   },
   mounted() {
      this.fetchMovie();
   }
}
</script>

<style scoped>
.movie_page {
   height: 100vh;
   width: 100vw;
   background-size: cover;
}

.movie-info-wrapper {
   color: aliceblue;
   padding-left: 100px;
   display: flex;
   flex-direction: column;
   height: 100%;
   background: linear-gradient(to right, black, transparent);
}

.movie-info {
   height: 100%;
   margin-top: 80px;
   padding-top: 20px;
   display: flex;
}

.posterImage-wrapper {
   height: max-content;
   overflow: hidden;
   width: 400px;
}

.posterImage-wrapper img {
   width: 400px;
   border-radius: 20px;
   object-fit: contain;
}

.movie-description {
   width: 30%;
   display: flex;
   flex-direction: column;
   margin-left: 50px;
   text-align: justify;
}

.movie-description h1 {
   margin: 0 auto;
}

.movie-description p {
   margin-top: 10px;
}

.movie-icons {
   display: flex;
   margin-top: 15px;
   flex-direction: column;
   gap: 15px;
}

.movie-icons-item {
   display: flex;
   gap: 5px;
   font-size: 18px;
}
</style>