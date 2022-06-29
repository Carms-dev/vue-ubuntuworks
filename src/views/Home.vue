<template>
  <!-- HERO -->
  <div>
    <section class="row hero pb-5 mt-1">
      <div class="col-12 col-md-7 hero-content">
        <h1 class="display-3 mb-3">Accessible Events Tool</h1>
        <p class="lead text-secondary">We want to help you share vital info so that you can increase attendance to your events.</p>
        <router-link class="btn btn-prime btn-lg mt-3 mb-5" to="/reports/new">Get Started</router-link>

        <div class="row">
          <div class="col-6">
            <h3>10-20</h3>
            <p>Minutes Required</p>
          </div>
          <div class="col-6">
            <h3>4</h3>
            <p>Areas of Accessibility</p>
          </div>
        </div>
      </div>
      <!-- HERO IMAGE -->
      <div class="col-12 col-md-5 hero-image">
        <img src="../assets/feature.png" alt="UbuntuWorks Featured Image">
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="row text-center g-5 py-5 steps">
      <h2 class="display-6">How it works!</h2>
      <div class="col-12 col-sm-6 col-md-4 p-3">
        <h6 class="display-1 text-warning mb-4 font-weight-bold">1</h6>
        <p>Check off all boxes which apply to your event. Then, we do the rest!</p>
        <!-- <b-icon icon="check2-square"></b-icon> -->
      </div>
      <div class="col-12 col-sm-6 col-md-4 p-3">
        <h6 class="display-1 text-warning mb-4 font-weight-bold">2</h6>
        <p>The info from your input will be gathered automatically, ready to share!</p>
        <!-- <b-icon icon="layout-text-window-reverse"></b-icon> -->
      </div>
      <div class="col-12 col-sm-6 col-md-4 p-3">
        <h6 class="display-1 text-warning font-weight-bold">3</h6>
        <p>Share the results on social media or a link that you can email to everyone on your invite list.</p>
        <!-- <b-icon icon="share"></b-icon> -->
      </div>
    </section>

    <!-- Secondary Value Proposition -->
    <section class="row my-5 mx-1">
      <div class="jumbotron p-5 bg-light border shadow-sm col-12 col-md-8 offset-md-2 text-center">

        <h3 class="display-6 pb-3">Everyone wins. Yayyyyy!</h3>
        <p class="lead pb-3 text-secondary">By taking a few minutes to check the boxes you are helping guests take the guesswork out of accessibility planning. AND increasing attendance to your events.</p>
        <router-link class="btn btn-prime btn-lg" to="/reports/new">Get Started</router-link>
      </div>
    </section>

    <!-- About -->
    <section class="row my-5 py-5">
      <div class="col-12 col-md-4">
        <img style="width: 100%;" src="../assets/QPIRG-C_logo.png" alt="Qpirg Concordia Logo">
      </div>
      <div class="col-12 col-md-8" style="display: grid; align-content: center;">
        <h2 class="display-6 mb-3">About this initiative</h2>
        <p>These interactive modules are here to help you communicate to participants with disabilities what will be available at your event so that they can attend. At the end of the module, you'll have a description of your event's accessibility to be shared on social media, invitations etc.</p>
        <p>This tool was created with the financial support of QPIRG Concordia, developed by Carms Ng, and written and created by Shay Hadley.</p>
      </div>
    </section>

  </div>
</template>

<!-- <script>
import db from "../firebaseDb";

export default {
  data() {
    return {
      event: {},
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      const report = { event: this.event };

      db.collection("reports")
        .add(report)
        .then((res) => {
          this.$router.push(`/reports/${res.id}`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .hero-content {
    display: grid;
    align-content: center;
    justify-content: flex-start;
  }
  .hero-content a {
    justify-self: flex-start;
  }
  .hero-image {
    display: grid;
    align-content: center;
  }
  .hero-image img {
    width: 100%;
    object-fit: cover;
  }
  .jumbotron {
    border-radius: $border-radius;
  }
</style> -->
