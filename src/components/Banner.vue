<template>
    <div class="banner_wrapper" :style="backgroundImageInlineStyle" >
        <div class="movie-info">
            <h1 class="movie-info_title">{{ banner.title }}</h1>
            <p>{{ banner.overview }}</p>
        </div>
    </div>
</template>

<script>
import getImage from '@/lib/getImage';

export default {
    props: {
        banner: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            bgImage: '',
        }
    },
    computed: {
        backgroundImageInlineStyle() {
            return `background-image: url(${this.bgImage})` 
        },
    },
    watch: {
        banner() {
            this.bgImage = getImage(this.banner.backdrop_path)
        }
    }
}
</script>

<style>
.banner_wrapper {
    width: 100%;
    height: 100vh;
    background-size: cover;
}
.movie-info{
    color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background: linear-gradient(to right, black, transparent);
}
.movie-info_title {
    font-size: 3rem;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
}
.movie-info p{
    width: 50%;
    margin-top: 20px;
}
</style>