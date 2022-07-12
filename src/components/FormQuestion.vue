<template>
  <!-- TODO: add form validation (with vuelidate?) -->

  <div class="mb-6">
    <label
      :for="'input-' + index"
      class="label is-medium mb-5"
    >{{ question.label }}</label>
    <div class="control">

      <!-- Text -->
      <input
        class="input is-medium is-rounded"
        v-if="question.type === 'input'"
        :id="'input-' + index"
        type="text"
        v-model="form[question.label]"
        :required="question.required ? true : false"
      >

      <!-- Radio -->
      <div
        class="control is-flex is-flex-direction-column"
        v-else-if="question.type === 'multiple-choice'"
      >
        <label
          class="radio block"
          v-for="option in question.options"
        >
          <input
            type="radio"
            :name="'radios-' + index"
            v-model="form[question.label]"
            :value="option"
          >
          {{ option }}
        </label>
      </div>

      <!-- Checkbox -->
      <div
        class="control is-flex is-flex-direction-column"
        v-else-if="question.type === 'multi-select'"
        :id="'checkboxes-' + index"
        :aria-describedby="question.label"
      >
        <label
          class="checkbox block"
          v-for="option in question.options"
          :key="question.label + '-' + option"
        >
          <input
            :id="'input-' + index"
            v-model="form[question.label]"
            type="checkbox"
          >
          {{ option }}
        </label>
      </div>

      <!-- Select -->
      <div
        class="select"
        v-else-if="question.type === 'select'"
        :id="'input-' + index"
      >
        <select
          v-model="form[question.label]"
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
            <input
              :id="'input-' + index"
              v-model="form[question.label]"
              type="checkbox"
            >
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
</template>

<script setup>
import modules from "../data/modules.json";

defineProps({
  question: Object,
  form: Object,
  index: Number
});

function getImageUrl(fileName) {
  return new URL(`../assets/${fileName}`, import.meta.url).href
}
</script>

<!-- <script>
import modules from "../data/modules";

export default {
  data() {
    return {
      modules,
    };
  },
  props: {
    question: {
      type: Object,
      default: () => ({}),
    },
    form: {
      type: Object,
      default: () => ({}),
    },
    index: Number,
  },
  methods: {
    getImgUrl(file) {
      return require("@/assets/" + file)
    },
  }

};
</script>

<style scoped>
  .custom-control-label {
    font-size: 5rem;
  }
  .input-underline {
    margin-top: 1rem;
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid grey;
  }
  input[type="radio"]:checked:after {
    background-color: greenyellow;
  }
</style> -->
