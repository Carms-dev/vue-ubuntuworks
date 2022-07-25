<template>
  <div>
    <!-- <p class="mb-3">{{ paramReportId }}</p> -->
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
                v-for="(section, index) in reportSections"
                :key="section"
                :class="{ 'is-active': index === activeTabIndex }"
              >
                <a @click="switchToTab(index)">{{ section.name }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <section class="section is-size-5 px-0">
      <ReportTabs
        :current-tab="activeTabIndex"
        :report-sections="reportSections"
      ></ReportTabs>
    </section>
  </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useFetchReportData } from '../components/form/formDataUtils';
import ReportTabs from './ReportTabs.vue';
import reportSections from '../data/reportSections.json';

const route = useRoute();
const paramReportId = route.params.report_id;
const { reportData } = await useFetchReportData(paramReportId);
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
