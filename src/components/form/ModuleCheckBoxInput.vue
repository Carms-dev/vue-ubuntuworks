<template>
  <div>
    <!-- Custom Checkbox for Module Selection -->
    <label
      class="label is-medium mb-5"
      v-html="labelHtml"
    />
    <div
      class="columns has-text-centered field"
    >
      <div
        class="column"
        v-for="module in modules"
        :key="module.key"
      >
        <label class="control checkbox">
          <input
            type="checkbox"
            :name="uuid"
            :value="module.key"
            :checked="moduleSelected(module.key)"
            :disabled="module.disabled"
            @input="update(module.key, $event.target.checked);"
          >
          <img
            :src="module.image.file"
            :alt="module.image.alt"
            class="my-2"
          >
          <p class="is-size-5">{{ module.name }}</p>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFieldProps, useLabelHtml } from './setupFields';

// TODO: fix the default for this field.. may need some refactoring
const props = defineProps(useFieldProps(Array, ["audio_visual", "communication"]));
const { labelHtml } = useLabelHtml(props);

const emit = defineEmits(['update:modelValue']);

function moduleSelected(moduleKey) {
  return props.modelValue.indexOf(moduleKey) !== -1;
}

function update(moduleKey, checked) {
  const moduleIndex = props.modelValue.indexOf(moduleKey);

  if (checked && moduleIndex === -1) {
    props.modelValue.push(moduleKey);
  } else if (!checked && moduleIndex !== -1) {
    props.modelValue.splice(moduleIndex, 1);
  }

  emit('update:modelValue', props.modelValue);
}
</script>