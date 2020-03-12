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
                            <a class="button is-info" href="/login">
                                <span class="icon">
                                    <i class="fas fa-sign-in-alt"></i>
                                </span>
                                <span>Log In</span>
                            </a>
                            <a class="button is-light" href="/register">
                                <span class="icon">
                                    <i class="fas fa-user-plus"></i>
                                </span>
                                <span>Sign Up</span>
                            </a>
                        </div>
                    </span>
                </div>
            </div>
        </nav>

        <div class="container is-fluid is-main-content">
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
                                            </span>
                                            Login
                                        </p>
                                    </header>
                                    <form class="form-horizontal">
                                        <div class="card-content">
                                            <div class="content">
                                                <div class="field">
                                                    <label for="" class="label">E-Mail Address</label>
                                                    <div class="control has-icons-left">
                                                        <input class="input" id="email" type="email" name="email" placeholder="e.g. bobsmith@gmail.com" required>
                                                        <span class="icon is-small is-left">
                                                            <i class="fa fa-envelope"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="field">
                                                    <label class="label" for="password">Password</label>
                                                    <div class="control has-icons-left">
                                                        <input class="input" placeholder="*******" id="password" type="password" name="password" required>
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
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
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
