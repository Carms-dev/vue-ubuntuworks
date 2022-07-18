<template>
  <div>
    <label
      :for="uuid"
      class="label is-medium mb-5"
      v-html="labelHtml"
    />
    <div class="control">
      <input
        :value="modelValue"
        :id="uuid"
        class="input is-medium is-rounded"
        type="text"
        @input="$emit('update:modelValue', $event.target.value)"
      >
      <span>{{ validation.errorMessage }}</span>
    </div>
  </div>
</template>

<script setup>
import { formFieldProps, useLabelHtml } from './setupfields';

const props = defineProps(formFieldProps);
const { labelHtml } = useLabelHtml(props);
</script>