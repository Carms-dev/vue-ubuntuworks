<template>
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
      <!-- TODO: add form validation (with vuelidate?) -->

      <div class="mb-6">
        <label
          :for="question.key"
          class="label is-medium mb-5"
        >{{ question.label }}</label>
        <div class="control">

          <!-- Text -->
          <Field
            class="input is-medium is-rounded"
            v-if="question.type === 'input'"
            :id="question.key"
            :name="question.key"
            type="text"
            v-model="schema[question.key]"
          />

          <!-- Radio -->
          <div
            class="control is-flex is-flex-direction-column"
            v-else-if="question.type === 'multiple-choice'"
          >
            <label
              class="radio block"
              v-for="option in question.options"
            >
              <Field
                type="radio"
                :name="question.key"
                v-model="schema[question.key]"
                :value="option"
              />
              {{ option }}
            </label>
          </div>

          <!-- Checkbox -->
          <div
            class="control is-flex is-flex-direction-column"
            v-else-if="question.type === 'multi-select'"
            :id="question.key"
            :aria-describedby="question.key"
          >
            <label
              class="checkbox block"
              v-for="option in question.options"
              :key="question.key + '-' + option"
            >
              <Field
                :id="question.key + '-' + option"
                v-model="schema[question.label]"
                type="checkbox"
                :name="question.key"
              />
              {{ option }}
            </label>
          </div>

          <!-- Select -->
          <div
            class="select"
            v-else-if="question.type === 'select'"
            :id="question.key"
          >
            <select
              v-model="schema[question.key]"
            >
              <option disabled selected>Chooze one plzkthx</option> <!-- FIXME -->
              <option
                v-for="option in question.options"
                :value="option"
              >{{ option }}</option>
            </select>
          </div>

          <!-- Custom Checkbox for Module Selection -->
          <div
            class="columns has-text-centered field"
            v-else-if="question.type === 'module-checkbox-group'"
          >
            <div
              class="column"
              v-for="module in modules"
              :key="module.key"
            >
              <label class="control checkbox">
                <Field
                  :id="'input-' + index"
                  v-model="form[question.label]"
                  type="checkbox"
                  :name="question.key"
                />
                <img
                  :src="getImageUrl(module.image.file)"
                  :alt="module.image.alt"
                  class="my-2"
                >
                <p class="is-size-5">{{ module.name }}</p>
              </label>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Submit -->
    <div class="control">
      <button type="submit" class="button is-warning">Next &raquo;</button>
    </div>
  </Form>
</template>

<script setup>
import modules from "../data/modules.json";
// import db from "../firebaseDb";
import questions from "../data/basicQuestions.json";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

defineProps({
  question: Object,
  form: Object,
  index: Number
});

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

function getImageUrl(fileName) {
  return new URL(`../assets/${fileName}`, import.meta.url).href
}
</script>
