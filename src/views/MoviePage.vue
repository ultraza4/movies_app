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
               <MovieCast :movie_id="this.movieId" />
            </div>
         </div>
      </div>
      <MovieVideos :movieId="this.movieId" />
      <div class="movieFrame">
         <iframe :src="movieURL(this.movieId)" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
      </div>
   </div>
</template>

<script>
import axios from 'axios';
import getImage from '@/lib/getImage';
import { Icon } from '@iconify/vue';
import MovieCast from '@/components/MovieCast.vue';
import MovieVideos from '@/components/MovieVideos.vue'

export default {
   components: {
      Icon,
      MovieCast,
      MovieVideos
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
         } catch (error) {
            console.log(error)
         }
      },
      movieURL(movie) {
         return `https://autoembed.to/movie/tmdb/${movie}`
      }
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
   height: 100%;
   width: 100%;
   background-size: cover;
   background-color: #000;
}

.movie-info-wrapper {
   color: aliceblue;
   display: flex;
   flex-direction: column;
   background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .009) 6.67%, rgba(0, 0, 0, .036) 13.33%, rgba(0, 0, 0, .082) 20%, rgba(0, 0, 0, .147) 26.67%, rgba(0, 0, 0, .232) 33.33%, rgba(0, 0, 0, .332) 40%, rgba(0, 0, 0, .443) 46.67%, rgba(0, 0, 0, .557) 53.33%, rgba(0, 0, 0, .668) 60%, rgba(0, 0, 0, .768) 66.67%, rgba(0, 0, 0, .853) 73.33%, rgba(0, 0, 0, .918) 80%, rgba(0, 0, 0, .964) 86.67%, rgba(0, 0, 0, .991) 93.33%, #000), linear-gradient(90deg, transparent 66.99%, rgba(0, 0, 0, .009) 69.19%, rgba(0, 0, 0, .036) 71.39%, rgba(0, 0, 0, .082) 73.59%, rgba(0, 0, 0, .147) 75.79%, rgba(0, 0, 0, .232) 77.99%, rgba(0, 0, 0, .332) 80.19%, rgba(0, 0, 0, .443) 82.4%, rgba(0, 0, 0, .557) 84.6%, rgba(0, 0, 0, .668) 86.8%, rgba(0, 0, 0, .768) 89%, rgba(0, 0, 0, .853) 91.2%, rgba(0, 0, 0, .918) 93.4%, rgba(0, 0, 0, .964) 95.6%, rgba(0, 0, 0, .991) 97.8%, #000), linear-gradient(270deg, transparent 66.78%, rgba(0, 0, 0, .009) 68.99%, rgba(0, 0, 0, .036) 71.21%, rgba(0, 0, 0, .082) 73.42%, rgba(0, 0, 0, .147) 75.64%, rgba(0, 0, 0, .232) 77.85%, rgba(0, 0, 0, .332) 80.07%, rgba(0, 0, 0, .443) 82.28%, rgba(0, 0, 0, .557) 84.5%, rgba(0, 0, 0, .668) 86.71%, rgba(0, 0, 0, .768) 88.93%, rgba(0, 0, 0, .853) 91.14%, rgba(0, 0, 0, .964) 95.57%, rgba(0, 0, 0, .991) 97.79%, #000);
}

.movie-info {
   height: 100%;
   margin-top: 80px;
   padding-top: 20px;
   display: flex;
   justify-content: center;
}

.posterImage-wrapper {
   height: max-content;
   overflow: hidden;
   width: 400px;
}

.posterImage-wrapper img {
   width: 350px;
   border-radius: 20px;
   object-fit: contain;
}

.movie-description {
   width: 30%;
   display: flex;
   padding: 10px 20px 20px 20px;
   flex-direction: column;
   margin-left: 50px;
   text-align: justify;
   background-color: #26262695;
}

.movie-description h1 {
   margin: 0 auto;
}

.movie-description p {
   margin-top: 10px;
}

.movie-icons {
   display: grid;
   grid-template-columns: 1fr 1fr;
   margin-top: 15px;
   flex-direction: column;
   gap: 15px;
}

.movie-icons-item {
   display: flex;
   gap: 5px;
   font-size: 18px;
}

.movieFrame {
   padding: 15px 200px 30px;
   background-color: inherit;
   height: 550px;
}
</style>