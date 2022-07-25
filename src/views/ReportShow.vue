<template>
  <div>
    <p class="mb-3">{{ paramReportId }}</p>
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            My Cool Event
          </h1>
          <p class="subtitle is-4">
            Accessibility information
          </p>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li
                v-for="(tab, index) in tabList"
                :key="tab"
                :class="{ 'is-active': index === activeTabIndex }"
              >
                <a @click="switchToTab(index)">{{ tab }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <section class="section is-size-5">
      <ReportTiles></ReportTiles>
    </section>

    <section class="section is-size-5">
      
      <div
        class="container is-fluid p-0"
        v-show="activeTabIndex === 0"
      >
        <div class="tile is-ancestor">

          <div class="tile is-parent">

            <!-- About this event -->
            <div class="tile card is-child p-0 box">
              <div class="card-header">
                <h2 class="card-header-title title is-3 has-text-grey mb-0">
                  About this event
                </h2>
              </div>
              <div class="card-content">
                <div class="content mb-6">
                  <p>
                    This is an event where this that and the other thing happen.
                  </p>
                  <p>
                    We will do this thing, then that thing. All the things!
                  </p>
                  <p>
                    <strong>Please note: this event will be held both online and in-person.</strong>
                  </p>
                  
                </div>
                <p>
                    <a class="button is-outlined is-link" href="#">Event homepage</a>
                  </p>
              </div>
            </div>

          </div>

          <div class="tile is-parent">

            <!-- Accessibility contact -->
            <div class="tile card is-child p-0 box">
              <div class="card-header">
                <h2 class="card-header-title title is-3 has-text-grey mb-0">
                  Accessibility contact person
                </h2>
              </div>
              <div class="card-content">
                <div class="content">
                  <div class="media">
                    <figure class="media-left ml-0">
                      <p class="image is-128x128">
                        <img src="https://bulma.io/images/placeholders/128x128.png">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <h3 class="title is-4">Jane Doe</h3>
                        <p>
                          Email: <a href="#" class="is-block">janedoe@idontexist.com</a>
                        </p>
                        <p>
                          Phone: <a href="#" class="is-block">+1 (234) 567-8909</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Accessibility contact -->
            <div class="tile card is-child p-0 box">
              <div class="card-header">
                <h2 class="card-header-title title is-3 has-text-grey mb-0">
                  Accessibility contact person
                </h2>
              </div>
              <div class="card-content">
                <div class="content">
                  <div class="media">
                    <figure class="media-left ml-0">
                      <p class="image is-128x128">
                        <img src="https://bulma.io/images/placeholders/128x128.png">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <h3 class="title is-4">Jane Doe</h3>
                        <p>
                          Email: <a href="#" class="is-block">janedoe@idontexist.com</a>
                        </p>
                        <p>
                          Phone: <a href="#" class="is-block">+1 (234) 567-8909</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useFetchReportData } from '../components/form/formDataUtils';
import ReportTiles from './ReportTiles.vue';

const route = useRoute();
const paramReportId = route.params.report_id;
const { reportData } = await useFetchReportData(paramReportId);
console.log(reportData.value);
let activeTabIndex = ref(0);

const tabList = [
  "Overview",
  "Audio/visual",
  "Communication",
  "Physical",
  "COVID-19",
  "Other"
]

function tabSelected(tabIndex) {
  return tabIndex === activeTabIndex;
}

function switchToTab(tabIndex) {
  activeTabIndex.value = tabIndex;
}
</script>

<!-- <script>
import db from "../firebaseDb";
import Accordion from "../components/Accordion.vue";
import allModules from "../data/modules";

export default {
  components: {
    Accordion,
  },
  data() {
    return {
      report: {},
      allModules: allModules,
      eventName: "",
    };
  },
  created() {
    db.collection("reports")
      .doc(this.$route.params.report_id)
      .get()
      .then((snapshot) => {
        this.report = {
          ...snapshot.data(),
          report_id: this.$route.params.report_id,
        };
        this.eventName = this.report.basic["What's the event name?"];
      });
  },
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style> -->
