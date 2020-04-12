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

export default {
  name: 'App',
  components: {
    Navbar
  },
};
</script>
