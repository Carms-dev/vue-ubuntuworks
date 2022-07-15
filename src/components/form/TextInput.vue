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
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
    default: ""
  },
  label: {
    type: String,
    required: true
  },
  uuid: {
    type: Number,
    default: 0,
  },
  required: {
    type: Boolean,
    default: false,
  },
  validation: {
    type: Object,
    default: {}
  }
});

const labelHtml = computed(() => {
  const requiredHtml =
    props.required
      ? ' <span class="label--required">*</span>'
      : "";
  return props.label + requiredHtml;
});
</script>