<template>
  <!-- Form -->
  <Form
    @submit="onFormSubmit"
    :validation-schema="schema"
    v-slot="{ errors }"
    action=""
    class="py-4"
  >
    <!-- Test input -->
    <label for="test-input" class="label is-medium mb-5">Test Input</label>
    <div class="control">
      <!-- Text -->
      <Field
        class="input is-medium is-rounded"
        :class="{ 'is-invalid': errors.testInput }"
        name="testInput"
        id="test-input"
        type="text"
      >
      </Field>
      <div class="invalid-feedback">{{errors.testInput}}</div>
    </div>

    <!-- <div
        class="field"
        v-for="(question, index) in questions"
        :key="question.key"
        >
            <FormQuestion :form="form" :question="question" :index="index" />
        </div> -->

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
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

const schema = Yup.object().shape({
  testInput: Yup.string().min(16).required("YOU MUST ENTER DATA, HUMAN."),
});

const form = questions.reduce((a, v) => ({ ...a, [v.label]: v.initial }), {});

function onFormSubmit(values) {
  // display form values on success
  alert("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
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
