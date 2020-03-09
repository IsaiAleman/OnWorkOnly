<template>
    <div>
        <section class="hero is-danger is-fullheight">
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="/">
                                <img src="../../../../public/Logo.png" alt="Logo">
                            </a>
                        </div>
                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <span class="navbar-item">
                                <a class="button is-white is-outlined" href="/">
                                    <span class="icon">
                                        <i class="fa fa-home"></i>
                                    </span>
                                <span>Home</span>
                                </a>
                                </span>
                                <span class="navbar-item">
                                <a class="button is-white is-outlined" href="/login">
                                    <span class="icon">
                                        <i class="fas fa-sign-in-alt"></i>
                                    </span>
                                <span>Log In</span>
                                </a>
                                </span>
                                <span class="navbar-item">
                                <a class="button is-white is-outlined" href="/register">
                                    <span class="icon">
                                        <i class="fas fa-user-plus"></i>
                                    </span>
                                <span>Sing Up</span>
                                </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div id='vantajs' class="hero-body">
                <div class="container">
                    <div class="columns padding-tittle">
                        <div class="column is-6">
                            <div class="container has-background-white">
                                <h1 class="title has-text-black">
                                    On Work Only
                                </h1>
                                <div class="container is-marginless">
                                    <h2 class="subtitle has-text-black">
                                        OWO is a page with the mission of attending, informing and verifying the veracity of the different workplaces available, OWO constantly of a variety of options to respond to the needs and circumstances of each client.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container padding-subtittle">
                        <h1 class="title has-text-black">
                            Vision
                        </h1>
                        <div class="container is-marginless">
                            <h2 class="subtitle has-text-black">
                                OWO will be a page with the transmission to report, report and verify the accuracy of the available workplaces, or OWO consists of a variety of options for the needs and circumstances of each client.
                            </h2>
                        </div>
                    </div>

                    <div class="container padding-subtittle">
                        <h1 class="title has-text-black">
                            Mision
                        </h1>
                        <div class="container is-marginless">
                            <h2 class="subtitle has-text-black">
                                OWO will be a page with the transmission to report, report and verify the accuracy of the available workplaces, or OWO consists of a variety of options for the needs and circumstances of each client.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
    export default {
        name: 'Index',
    }

    window.addEventListener("load", function(event) {
        VANTA.GLOBE({
            el: "#vantajs",
            mouseControls: true,
            touchControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xF14668,
            color2: 0xF14668,
            backgroundColor: 0xffffff,
            size: 0.7
        });
    });
</script>