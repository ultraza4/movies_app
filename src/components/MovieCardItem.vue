<template>
    <div class="movie-item">
        <div class="card-image" @click="$router.push(`/movie/${movie.id}`)">
            <img class="image" :src="cardImage" alt="" />
            <div class="icon-wrapper">
                <Icon icon="material-symbols:play-circle-outline" width="70" />
            </div>
        </div>
        <div class="card-info">
            <span>{{ this.title }}</span>
            <p v-if="discr">{{ this.discription }}</p>
        </div>
        <div class="movie-star">
            <p>
                <Icon icon="material-symbols:star-rounded" color="white" />
                <span>{{ movie.vote_average.toFixed(1) }}</span>
            </p>
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
    data() {
        return {
            discription: '',
            title: ''
        }
    },
    props: {
        movie: {
            type: Object,
            required: true
        },
        discr: {
            type: Boolean
        }
    },
    computed: {
        cardImage() {
            this.discription = this.movie.overview.length <= 150 ? this.movie.overview : this.movie.overview.slice(0, 150) + "...";
            this.title = this.movie.title <= 60 ? this.movie.title : this.movie.title.slice(0, 50);
            const image = getImage(this.movie.poster_path);
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
    position: relative;
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
    right: 50%;
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

.movie-star {
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 5px;
    padding: 10px 10px;
    background-color: rgb(4 120 87);

}

.movie-star p {
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 5px;
    color: white;
}

@media only screen and (max-device-width: 480px) {
    .card-info p {
        display: none;
    }

    .card-info span {
        font-size: small;
    }

    .movie-star {
        padding: 3px 3px;
        background-color: rgb(4 120 87);
        font-size: small;
        top: 5px;
        right: 5px;
    }
}
</style>