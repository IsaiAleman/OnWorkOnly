<template>
    <div>
        <nav class="navbar card">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="../../img/Logo.png" alt="Logo">
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
                            <div class="column is-6">
                                <div class="card" >
                                    <div class="card-content">
                                        <h1 class="title">On Work Only</h1>
                                        <h2 class="subtitle">OWO is a page with the mission of attending, informing and verifying the veracity of the different workplaces available, OWO constantly of a variety of options to respond to the needs and circumstances of each client.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="main-info" class="hero is-fullheight">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns">
                            <div class="column is-6">
                                <h1 class="title has-text-black">Vision</h1>
                                <h2 class="subtitle has-text-black">OWO will be a page with the transmission to report, report and verify the accuracy of the available workplaces, or OWO consists of a variety of options for the needs and circumstances of each client.</h2>
                            </div>
                            <div class="column is-6">
                                <h1 class="title has-text-black">Mision</h1>
                                <h2 class="subtitle has-text-black">OWO will be a page with the transmission to report, report and verify the accuracy of the available workplaces, or OWO consists of a variety of options for the needs and circumstances of each client.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

    window.addEventListener("load", function(event) {

    });

    export default {
        name: 'Index',
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
