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
                                        <i class="fas fa-user-plus"></i>
                                    </span>&nbsp;Sign Up
                                </p>
                            </header>
                            <form class="form-horizontal" @submit.prevent="register">
                                <div class="card-content">
                                    <div class="content">
                                        <div class="field">
                                            <label for="name" class="label">Name</label>
                                            <div class="control has-icons-left">
                                                <input class="input" id="name" type="text" v-model="name" name="name" placeholder="e.g. John Doe" required>
                                                <span class="icon is-small is-left">
                                                    <i class="fa fa-user"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label for="" class="label">E-Mail Address</label>
                                            <div class="control has-icons-left">
                                                <input class="input" id="email" type="email" v-model="email" name="email" placeholder="e.g. bobsmith@gmail.com" required>
                                                <span class="icon is-small is-left">
                                                    <i class="fa fa-envelope"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label" for="password">Password</label>
                                            <div class="control has-icons-left">
                                                <input class="input" placeholder="*******"  v-model="password" id="password" type="password" name="password" required>
                                                <span class="icon is-small is-left">
                                                    <i class="fa fa-lock"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="field is-grouped">
                                            <div class="control">
                                                <button class="button is-info" type="submit">Sign Up</button>
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
    name: 'Register',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        };
    },
    beforeRouteEnter(to, from, next) {
        const token = localStorage.getItem('owo-token');

        return token ? next('/') : next();
    },
    methods: {
        register() {
            axios.post('/api/register', {
                name: this.name,
                email: this.email,
                password: this.password
            })
            .then(response => {
                this.$router.push('/login');
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    mounted() {
        VANTA.GLOBE({
            el: "#main-canvas",
            mouseControls: false,
            touchControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 3.00,
            color: 0xF14668,
            color2: 0xF14668,
            backgroundColor: 0xffffff,
            size: 0.7
        });
    }
}
</script>
