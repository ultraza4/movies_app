<template>
    <div class="actor-page">
        <div class="actor-discription">
            <img :src="`https://image.tmdb.org/t/p/original${actor.profile_path}`" alt="">
            <div class="actor-info">
                <h2>{{ actor.name }}</h2>
                <p class="actor-biography">
                    {{ actor.biography }}
                </p>
                <div class="actor-info-item">
                    <span>Career: </span>
                    <span>{{ actor.known_for_department }}</span>
                </div>
                <div class="actor-info-item">
                    <span>Birth Day: </span>
                    <span>{{ actor.birthday }}</span>
                </div>
                <div class="actor-info-item">
                    <span>Place of Birth: </span>
                    <span>{{ actor.place_of_birth }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
    data() {
        return {
            route: useRoute(),
            actor: {}
        }
    },
    methods: {
        async fetchActorInfo() {
            const res = await axios.get(`https://api.themoviedb.org/3/person/${this.route.params.id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            this.actor = res.data
            console.log(this.actor)
        }
    },
    mounted() {
        this.fetchActorInfo()
    }
}
</script>

<style scoped>
.actor-page {
    width: 100%;
    height: 100%;
    margin-top: 100px;
}

.actor-discription {
    display: flex;
    justify-content: center;
}

.actor-discription img {
    width: 340px;
    object-fit: contain;
}

.actor-info {
    width: 500px;
    margin-left: 50px;
    text-align: justify;
    color: white;
}

.actor-biography {
    margin-top: 15px;
    font-size: large;
}

.actor-info-item {
    margin-top: 10px;
}
</style>