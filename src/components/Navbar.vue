<template>
    <nav class="navbar" ref="header">
        <div class="icon_wrapper" @click="$router.push(`/`)">
            <Icon class="icon" icon="ri:movie-2-line" width="40" />
            <span class="icon_text">iMovie</span>
        </div>
        <div class="nav-items">
            <router-link class="nav-item" to="/">HOME</router-link>
            <router-link class="nav-item" to="/toprated">TOP RATED</router-link>
            <router-link class="nav-item" to="/latest">LATEST</router-link>
        </div>
    </nav>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll() {

            if (window.pageYOffset > 30) {
                this.$refs.header.classList.add('header-hidden');
            } else {
                this.$refs.header.classList.remove('header-hidden');
            }
        },
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
}

.navbar.header-hidden {
    transform: translateY(-200%);
}

.nav-items {
    display: flex;
    gap: 20px;
}

.nav-item {
    font-size: large;
    font-weight: 600;
    color: white;
    text-decoration: none;
    transition: 0.3s;
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
</style>