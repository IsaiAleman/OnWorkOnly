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
                            <div class="columns" style="margin-top:1.5em;">
                               <div class="columns is-mobile">
                                    <div class="column is-12">
                                        <h1 class="title has-text-black">Business Opportunity</h1>
                                        <h2 class="subtitle has-text-black">Today, there are multiple types of platforms that allow you to rent different types of spaces. Our project tries to fill the gap of those companies and micro-companies that instead of looking for coworking areas, try to find real estate agents for a certain period to start, for example, startups or, to locate in places where the use of land is allowed. Commercially, the project is an Internet business model based on intermediation, that is, we connect owners and micro-entrepreneurs, so that we control supply with demand and you can get a commission for using the platform and for advertising (positioning of associates' furnishings on customer boards).</h2>
                                    </div>
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
