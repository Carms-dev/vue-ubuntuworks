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
    <!-- <label for="test-input" class="label is-medium mb-5">Test Input</label>
    <div class="control"> -->
      <!-- Text -->
      <!-- <Field
        class="input is-medium is-rounded"
        :class="{ 'is-invalid': errors.testInput }"
        name="testInput"
        id="test-input"
        type="text"
      >
      </Field>
      <div class="invalid-feedback">{{errors.testInput}}</div>
    </div> -->

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
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

const form = {};
const questionSchema = {};

// Populate 'form' object and validation schema
for (let question of questions) {
  form[question.label] = question.label;
  
  if (question.required) {
    questionSchema[question.key] = Yup;
    
    switch(question.type) {
      case "input":
      case "multiple-choice":
        questionSchema[question.key] = questionSchema[question.key].string(); 
        break;
      case "multi-select":
      case "module-checkbox-options":
      default:
        // TODO: sort out other field types
        break;
    }

    questionSchema[question.key] = questionSchema[question.key].required();
  }
}

const schema = Yup.object().shape(questionSchema);

function onFormSubmit(values) {
  // display form values on success
  alert("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
}
</script>
