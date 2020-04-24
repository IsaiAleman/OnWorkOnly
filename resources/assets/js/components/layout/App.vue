<template>
  <div>
    <Navbar />

    <div class="container is-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import 'buefy/dist/buefy.min.css';
export default {
  name: 'App',
  components: {
    Navbar
  },
};
</script>
