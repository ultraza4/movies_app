<template>
    <div class="movie-item">
        <div class="card-image">
            <img :src="cardImage" alt=""/>
            <div class="icon-wrapper">
                <div class="icon">
                    <Icon icon="material-symbols:play-circle-outline" width = "60"/>
                </div>
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
.card-image{
    position: relative;
    width: 100%;
    max-height: fit-content;
    overflow: hidden;
}
img{
    width: 100%;
    object-fit: fill;
    border-radius: 15px;
    transition: 0.5s;
}
img:hover {
    webkit-filter: blur(4px); /* Chrome, Safari, Opera */
    filter: blur(4px);
    cursor: pointer;
}
.icon-wrapper{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    opacity: 0%;
    position: absolute;
    left: -50%;
    top: 50%;
    transition: 0.5s;
    transform: translate(50%,-50%);
}
.icon-wrapper:hover {
    opacity: 100%;
}
.icon{
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
}
.icon:hover{
    opacity: 100%;
}
</style>