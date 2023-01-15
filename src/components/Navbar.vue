<template>
    <nav class="navbar" :class="{ 'header-hidden': showNavbar }">
        <div class="icon_wrapper" @click="$router.push(`/`)">
            <Icon class="icon" icon="ri:movie-2-line" width="40" />
            <span class="icon_text">iMovie</span>
        </div>
        <div class="nav-items">
            <div class="nav-items-wrapper">
                <router-link class="nav-item" to="/">HOME</router-link>
                <router-link class="nav-item" to="/toprated">TOP RATED </router-link>
                <router-link class="nav-item" to="/latest">LATEST</router-link>
            </div>
            <div class="searchInput-wrapper">
                <my-input v-model="searchQuery" class="searchInput" placeholder="Search for the movie"
                    @input="fetchSearchQuery" @focus="focused = true" @blur="blurSearch" />
                <div v-if="moviesLength() && focused && showSearch" class="searchedMovies">
                    <div v-for="movie in searchedMovies" class="movie-item" @mousedown="itemClick(movie.id)">
                        {{ movie.title }} ({{ movie.release_date.slice(0, 4) }})
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { Icon } from '@iconify/vue';
import axios from 'axios';
import myInput from './UI/myInput.vue';

export default {
    components: {
        Icon,
        myInput
    },
    data() {
        return {
            searchQuery: '',
            searchedMovies: [],
            focused: false,
            showSearch: true,
            showNavbar: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll() {
            if (window.pageYOffset > 30) {
                this.showNavbar = true;
                this.showSearch = false
            } else {
                this.showNavbar = false
                this.showSearch = false
            }
        },
        async fetchSearchQuery() {
            try {
                if (this.moviesLength()) {
                    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${this.searchQuery}&page=1&include_adult=false`)
                    this.searchedMovies = res.data.results.slice(0, 5);
                    console.log(this.searchedMovies)
                }
            } catch (error) {
                console.log(error)
            }
        },
        itemClick(id) {
            this.$router.push(`/movie/${id}`);
            this.focused = false;
        },
        blurSearch() {
            this.focused = false;
            this.searchQuery = '';
        },
        moviesLength() {
            return this.searchQuery.length
        }
    },
    destroyed() {
        window.removeEventListener('scroll', this.onScroll);
    }
}
</script>

<style scoped>
.navbar {
    display: flex;
    position: fixed;
    justify-items: center;
    align-items: center;
    padding-bottom: 10px;
    right: 100px;
    left: 100px;
    top: 20px;
    border-bottom: solid 2px white;
    transition: all .3s ease;
    z-index: 1000;
}

.navbar.header-hidden {
    transform: translateY(-200%);
}

.nav-items {
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
}

.nav-items-wrapper {
    display: flex;
    gap: 20px;
    align-items: center;
}

.nav-item {
    font-size: large;
    font-weight: 600;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    display: inline-block;
    white-space: nowrap;
}

.nav-item:hover {
    cursor: pointer;
    color: rgb(34 197 94);
}

.icon_wrapper {
    display: flex;
    margin-right: 50px;
    align-items: center;
    color: white;
    gap: 5px;
    cursor: pointer;
}

.icon_text {
    font-size: 25px;
}

.searchInput-wrapper {
    display: flex;
    flex-direction: column;
    background-color: white;
    position: relative;
}

.searchInput {
    width: 300px;
    align-self: flex-end;
}

.searchedMovies {
    position: absolute;
    width: 100%;
    top: 40px;
    left: 0px;
    color: black;
    background-color: white;
}

.movie-item {
    cursor: pointer;
    padding: 5px;
}

.movie-item:hover {
    background-color: rgb(34 197 94);
}
</style>