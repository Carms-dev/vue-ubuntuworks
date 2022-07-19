<template>
  <div>
    <label
      :for="uuid"
      class="label is-medium mb-5"
      v-html="labelHtml"
    />
    <div class="control is-flex is-flex-direction-column">
      <label
        class="radio block is-size-5"
        v-for="option in options"
      >
        <input
          type="radio"
          class="mr-3"
          :name="uuid"
          :value="option"
          :checked="option === modelValue"
          @input="$emit('update:modelValue', $event.target.value);"
        >
        {{ option }}
      </label>
      <span>{{ validation.errorMessage }}</span>
    </div>
  </div>
</template>

<script setup>
import { useFieldProps, useLabelHtml } from './setupFields';

const props = defineProps(useFieldProps(String, ""));
const { labelHtml } = useLabelHtml(props);
</script>