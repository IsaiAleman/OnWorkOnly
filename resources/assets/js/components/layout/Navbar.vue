<template>
  <b-navbar class="card">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../../../img/Logo.png"
          alt="OWO Logo"
        >
      </b-navbar-item>
    </template>

    <template slot="end">
        <b-navbar-item tag="div">
            <div class="buttons">
                <a
                  v-if="user == null"
                  class="button is-light"
                  href="/register"
                >
                  <strong>Sign up</strong>
                </a>
                <a
                  v-if="user == null"
                  class="button is-info"
                  href="/login"
                >
                  Log in
                </a>
                <a
                  v-if="user != null"
                  class="button is-danger"
                  v-on:click="logout"
                >
                  <span class="icon">
                    <i class="fas fa-sign-out-alt"></i>
                  </span>
                  Logout
                </a>
            </div>
        </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return { user: null, };
  },
  mounted() {
    this.user = localStorage.getItem('owo-token');
  },
  updated() {
    this.user = localStorage.getItem('owo-token');
  },
  methods: {
    logout() {
      axios.get('/api/logout')
        .then(() => {
          localStorage.removeItem('owo-token');
          this.user = null;
        })
        .catch(() => {
          // error
        });
    },
  },
};
</script>
