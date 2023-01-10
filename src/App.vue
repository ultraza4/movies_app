<template class="app">
  <NavbarVue />
  <router-view />
</template>

<script>
import NavbarVue from './components/Navbar.vue';

export default {
  components: {
    NavbarVue
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
