<template>
  <div class="row">
    <div class="col-md-12">
      <h1>Accessibility FAQS</h1>
      <p>{{ eventName }} </p>


      <!-- Basic Info -->
      <div
        v-for="moduleKey in report.selectedModuleKeys"
        :key="moduleKey"
        class="my-5"
      >
        <!-- Module Header -->
        <h3>{{ allModules.find(m => m.key === moduleKey).name }}</h3>
        <div
          v-for="([question, answer], index) in Object.entries(report[moduleKey])"
          :key="question"
        >
          <Accordion :question="question" :answer="answer" :accordionId="moduleKey + index"/>
        </div>
      </div>
    </div>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ report}}</pre>
    </b-card> -->
  </div>
</template>

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
