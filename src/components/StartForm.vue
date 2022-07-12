<template>
  <!-- Form -->
  <form @submit="onFormSubmit" action="" class="py-4">
    <div
      class="field"
      v-for="(question, index) in questions"
      :key="question.key"
    >
      <FormQuestion :form="form" :question="question" :index="index" />
    </div>

    <!-- Submit -->
    <div class="control">
      <button type="submit" class="button is-warning">Next &raquo;</button>
    </div>
  </form>
</template>

<script setup>
// import db from "../firebaseDb";
import questions from "../data/basicQuestions.json";
import FormQuestion from "../components/FormQuestion.vue";

const form = questions.reduce((a, v) => (
  {...a, [v.label]: v.initial }
), {});

function onFormSubmit(event) {
  event.preventDefault();

  console.log("SUBMITTED!");
}
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
