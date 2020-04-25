<template>
    <section id="main-canvas" class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    <span class="icon">
                                        <i class="fas fa-sign-in-alt"></i>
                                    </span>&nbsp;Login
                                </p>
                            </header>
                            <form class="form-horizontal" @submit.prevent="login">
                                <div class="card-content">
                                    <div class="content">
                                        <div class="field">
                                            <label for="" class="label">E-Mail Address</label>
                                            <div class="control has-icons-left">
                                                <input class="input" id="email" type="email" name="email" placeholder="e.g. bobsmith@gmail.com" v-model="email" required>
                                                <span class="icon is-small is-left">
                                                    <i class="fa fa-envelope"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label" for="password">Password</label>
                                            <div class="control has-icons-left">
                                                <input class="input" placeholder="*******" id="password" type="password" name="password" v-model="password" required>
                                                <span class="icon is-small is-left">
                                                    <i class="fa fa-lock"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label for="" class="checkbox">
                                                <input type="checkbox">
                                                Remember me
                                            </label>
                                        </div>
                                        <div class="field is-grouped">
                                            <div class="control">
                                                <button class="button is-info" type="submit">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  beforeRouteEnter(to, from, next) {
    const token = localStorage.getItem('owo-token');

    return token ? next('/') : next();
  },
  methods: {
    login(e) {
      const { email, password } = this;
      const { dispatch } = this.$store;

      if (email && password) {
          const self = this;
          dispatch(
              'authentication/login', {
                  email,
                  password,
                  error: function (m) {
                      self.$buefy.toast.open({
                          duration: 5000,
                          message: m,
                          position: 'is-bottom',
                          type: 'is-danger'
                      });
                  }
              });
      }
    },
  },
  mounted() {

  },
};
</script>
