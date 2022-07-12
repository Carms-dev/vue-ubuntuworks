<template>
  <section class="section">
    <div class="container is-max-desktop p-6">
      <div class="box p-6">
        <StartForm />
      </div>
    </div>
  </section>

  <div class="row p-3">
    <!-- Form -->
    <b-form @submit="onFormSubmit" class="col-12 col-lg-8 offset-lg-2 bg-light border mb-5 p-4 p-lg-5">
      <h1 class="display-5 mb-3">Let's set it up!</h1>
      <p class="lead text-secondary mb-4">Gather the basic information about your event and select relevant areas of disabilities!</p>
      <div
        class="my-5 question"
        v-for="(question, index) in questions"
        :key="question.key"
      >
        <Question :form="form" :question="question" :index="index" />

        <InfoPopover
          v-if="question.help"
          :content="question.help"
          :title="'Information'"
        />
      </div>
      <!-- buttons -->
      <b-button type="submit" variant="primary">Next &raquo;</b-button>
    </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
  </div>
</template>

<script setup>
import StartForm from '../components/StartForm.vue';
</script>

<!-- <script>
import db from "../firebaseDb";
import questions from "../data/basicQuestions";
import InfoPopover from "../components/InfoPopover.vue";
import Question from "../components/Question.vue";

export default {
  data() {
    return {
      questions: questions,
      form: questions.reduce((a, v) => ({ ...a, [v.label]: v.initial }), {}),
    };
  },
  components: {
    InfoPopover,
    Question,
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();

      const moduleQuestionKey = this.questions.find(question => question.key === "report_modules").label

      const selectedModuleKeys = this.form[moduleQuestionKey];

      delete this.form[moduleQuestionKey];

      const report = {
        basic: this.form,
        selectedModuleKeys,
      };
      db.collection("reports")
        .add(report)
        .then((res) => {
          // Go to first module
          this.$router.push(
            `/reports/${res.id}/modules/${report.selectedModuleKeys[0]}`
          );
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
