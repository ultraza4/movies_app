<template>
    <div class="movie-item">
        <div class="card-image" @click="$router.push(`/movie/${movie.id}`)">
            <img class="image" :src="cardImage" alt="" />
            <div class="icon-wrapper">
                <Icon icon="material-symbols:play-circle-outline" width="70" />
            </div>
        </div>
        <div class="card-info">
            <span>{{ movie.title }}</span>
            <p>{{ movie.overview }}</p>
        </div>
    </div>
</template>

<script>
import getImage from '@/lib/getImage';
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon
    },
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    computed: {
        cardImage() {
            const image = getImage(this.movie.poster_path)
            return `${image}`
        },
    },

}

</script>

<style scoped>
.movie-item {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 100%;
}

.card-image {
    width: 100%;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}

.image {
    width: 100%;
    object-fit: fill;
    border-radius: 15px;
    transition: 0.5s;
}

.image:hover {
    webkit-filter: blur(4px);
    filter: blur(4px);
    cursor: pointer;
}

.icon-wrapper {
    display: flex;
    justify-content: center;
    color: white;
    align-items: center;
    width: 100%;
    height: 100%;
    opacity: 0%;
    position: absolute;
    left: -50%;
    top: 50%;
    transition: 0.5s;
    transform: translate(50%, -50%);
}

.icon-wrapper:hover {
    opacity: 100%;
}

.card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin-top: 10px;
}
.card-info span {
    font-size: 20px;
}
.card-info p {
    opacity: 70%;
    text-align: justify;
    margin-top: 5px;
}

</style>