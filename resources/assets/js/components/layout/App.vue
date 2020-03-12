<template>
    <div>
        <nav class="navbar card">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="../../../img/Logo.png" alt="Logo">
                </a>
            </div>

            <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                    <span class="navbar-item">
                        <div class="buttons">

                            <a v-if="user == null" class="button is-info" href="/login">
                                <span class="icon">
                                    <i class="fas fa-sign-in-alt"></i>
                                </span>
                                <span>Log In</span>
                            </a>
                            <a v-if="user == null" class="button is-light" href="/register">
                                <span class="icon">
                                    <i class="fas fa-user-plus"></i>
                                </span>
                                <span>Sign Up</span>
                            </a>
                            <a v-if="user != null" class="button is-danger" v-on:click="logout">
                                <span class="icon">
                                    <i class="fas fa-sign-out-alt"></i>
                                </span>
                                <span>Logout</span>
                            </a>
                        </div>
                    </span>
                </div>
            </div>
        </nav>

        <div class="container is-fluid is-main-content">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
          user: null,
      };
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
            .then(response => {
                localStorage.removeItem('owo-token');
                this.user = null;
            })
            .catch(error => {
                console.log(error);
            });
      }
  }
}
</script>
