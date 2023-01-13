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