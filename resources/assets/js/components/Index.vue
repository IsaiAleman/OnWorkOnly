<template>
    <div>
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
</template>

<script>
export default {
  name: 'Index',
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
