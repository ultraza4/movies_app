<template>
    <nav class="navbar">
        <div class="icon_wrapper">
            <Icon class="icon" icon="ri:movie-2-line" width="40" />
            <span class="icon_text">映画</span>
        </div>
        <div class="nav-items">
            <router-link class="nav-item" to="/">HOME</router-link>
            <router-link class="nav-item" to="/about">ABOUT</router-link>
            <router-link class="nav-item" to="/new">NEW MOVIES</router-link>
        </div>
    </nav>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon
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
}

.icon_text {
    font-size: 25px;
}
</style>