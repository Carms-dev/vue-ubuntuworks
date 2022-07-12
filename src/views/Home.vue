<template>
  <div class="container">

    <!-- HERO -->
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-three-fifths">
            <h1 class="title is-size-1 has-text-weight-bold">
              Accessible Events Tool
            </h1>
            <p class="subtitle has-text-grey">
              We want to help you share vital info so that you can increase attendance to your events.
            </p>
            <div class="buttons">
              <router-link class="button is-medium is-primary is-rounded" to="/reports/new">
                <strong>Get Started</strong>							
              </router-link>
            </div>

            <div class="level">
              <div class="level-item is-justify-content-start">
                <div>
                  <p class="title mb-2">10-20</p>
                  <p class="heading">Minutes required</p>
                </div>
              </div>
              <div class="level-item is-justify-content-start">
                <div>
                  <p class="title mb-2">4</p>
                  <p class="heading">Areas of accessibility</p>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <img src="../assets/feature.png" alt="UbuntuWorks Featured Image">
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="section has-text-centered">
      <h2 class="title is-2">How it works!</h2>
      <div class="columns">
        <div class="column is-one-third">
          <div>
            <p class="title has-text-primary is-1">1</p>
            <p>Check off all boxes which apply to your event. Then, we do the rest!</p>
            <!-- <b-icon icon="check2-square"></b-icon> -->
          </div>
        </div>
        <div class="column is-one-third">
          <div>
            <p class="title has-text-primary is-1">2</p>
            <p>The info from your input will be gathered automatically, ready to share!</p>
            <!-- <b-icon icon="layout-text-window-reverse"></b-icon> -->
          </div>
        </div>
        <div class="column is-one-third">
          <div>
            <p class="title has-text-primary is-1">3</p>
            <p>Share the results on social media or a link that you can email to everyone on your invite list.</p>
            <!-- <b-icon icon="share"></b-icon> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Secondary Value Proposition -->
    <section class="section">
      <div class="container is-max-desktop has-text-centered">
        <div class="box p-6">
          <h3 class="title is-3">Everyone wins. Yayyyyy!</h3>
          <p class="is-size-5 has-text-grey block">By taking a few minutes to check the boxes you are helping guests take the guesswork out of accessibility planning. AND increasing attendance to your events.</p>
          <div class="buttons is-justify-content-center">
            <router-link class="button is-medium is-primary is-rounded" to="/reports/new">
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="section">
      <div class="columns">
        <div class="column is-one-third">
          <figure class="image">
            <img src="../assets/QPIRG-C_logo.png" alt="Qpirg Concordia Logo">
          </figure>
        </div>
        <div class="column is-flex is-flex-direction-column is-justify-content-center">
          <h2 class="title is-2">About this initiative</h2>
          <p class="block">These interactive modules are here to help you communicate to participants with disabilities what will be available at your event so that they can attend. At the end of the module, you'll have a description of your event's accessibility to be shared on social media, invitations etc.</p>
          <p>This tool was created with the financial support of QPIRG Concordia, developed by Carms Ng, and written and created by Shay Hadley.</p>
        </div>
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
