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
    login() {
      axios.post('/api/login', {
        email: this.email,
        password: this.password,
      })
        .then((response) => {
          localStorage.setItem('owo-token', response.data.data);
          this.$router.push('/');
        })
        .catch(() => {
          this.email = '';
          this.password = '';

          // console.log(error);
        });
    },
  },
  mounted() {
    VANTA.GLOBE({
      el: '#main-canvas',
      mouseControls: false,
      touchControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 3.00,
      color: 0xF14668,
      color2: 0xF14668,
      backgroundColor: 0xffffff,
      size: 0.7,
    });
  },
};
</script>
