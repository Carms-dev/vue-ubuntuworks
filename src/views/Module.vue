<template>
  <div class="row">
    <!-- Left Panel -->
    <div class="col-12 col-lg-3 d-none d-lg-block" style="padding-right: 2rem">
      <div v-for="module in selectedModules" :key="module.key">
        <router-link
          :to="`/reports/${reportId}/modules/${module.key}`"
          :class="'btn-module p-3' + [currentModule.key === module.key ? ' selected' : '']"
        >
          <img :src="getImgUrl(module.image.file)" :alt="module.image.alt" style="width: 100%">
          <p>{{ module.name }}</p>
        </router-link>
      </div>
    </div>

    <!-- Form -->
    <b-form @submit="onFormSubmit" class="col-12 col-lg-8 bg-light border mb-5 p-4 p-lg-5">
      <h1 class="display-4 mb-3">{{ currentModule.name }}</h1>
      <p class="lead mb-5" v-if="currentModule.description">{{ currentModule.description }}</p>

      <div
        class="py-3"
        v-for="(section) in sections"
        :key="section.sectionHeader"
      >
        <h2>{{ section.sectionHeader }}</h2>
        <div
          class="my-5 question"
          v-for="(question, index) in section.questions"
          :key="question.label"
        >
          <Question :form="form" :question="question" :index="index" />
          <InfoPopover
            v-if="question.help"
            :content="question.help"
            :title="'Information'"
          />
        </div>
      </div>

      <!-- buttons -->
      <FormButtons :isFirst="isFirst" :isLast="isLast" />
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>

</template>

<!-- <script>
import db from "../firebaseDb";
import allModules from "../data/modules";
import modulesQuestions from "../data/modulesQuestions";
import InfoPopover from "../components/InfoPopover.vue";
import Question from "../components/Question.vue";
import FormButtons from "../components/FormButtons.vue";

export default {
  components: {
    InfoPopover,
    Question,
    FormButtons,
  },
  data() {
    return {
      reportId: this.$route.params.report_id,
      currentModule: allModules.find(({key}) => key === this.$route.params.module_key),
      sections: modulesQuestions[this.$route.params.module_key],
      form: {},
      selectedModules: [],
      report: {},
      isFirst: null,
      isLast: null,
    };
  },
  created() {
    db.collection("reports")
      .doc(this.reportId)
      .get()
      .then((snapshot) => {
        this.report = snapshot.data()
      })
      .then(() => {
        const selectedModulesKeys = JSON.parse(JSON.stringify(this.report.selectedModuleKeys))
        this.selectedModules = allModules.filter(({ key }) => selectedModulesKeys.includes(key))
        this.isFirst = selectedModulesKeys.at(0) === this.currentModule.key
        this.isLast = selectedModulesKeys.at(-1) === this.currentModule.key

        if (this.$route.params.module_key in this.report) {
          this.form = this.report[this.$route.params.module_key]
        } else {
          const sections = JSON.parse(JSON.stringify(modulesQuestions[this.$route.params.module_key]))
          sections.forEach(({questions}) => {
            questions.forEach(question => this.form = {...this.form, [question.label]: question.initial})
          })
        }
      })
  },
  methods: {
    getImgUrl(file) {
      return require("@/assets/" + file)
    },
    onFormSubmit(event) {
      event.preventDefault();
      const updatedReport = { ...this.report, [this.currentModule.key]: this.form };

      // Update report
      db.collection("reports")
        .doc(this.reportId)
        .update(updatedReport)
        .then(() => {
          // db.collection("reports")
          //   .doc(this.reportId)
          //   .get()
          //   .then((snapshot) => {
          //     console.log(snapshot.data());
          //   });

          // Routing
          // Reached last module, direct to Reports Show
          const selectedModuleKeys = this.report.selectedModuleKeys
          if (this.isLast) {
            this.$router.push(`/reports/${this.reportId}`);
          // Otherwise go to the next module
          } else {
            const nextIndex = selectedModuleKeys.indexOf(this.currentModule.key) + 1
            this.$router.push(`/reports/${this.reportId}/modules/${selectedModuleKeys[nextIndex]}`);
            // Dirty fix, forcereload
            // this.$router.go(this.$router.currentRoute)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style> -->
