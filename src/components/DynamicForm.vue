<template>
  <SchemaFormWithValidation
    :schema="formSchema"
    :preventModelCleanupOnSchemaChange="true"
    schemaRowClasses="mb-6"
    @submit="onFormSubmit"
    class="mb-6"
  >
    <template #afterForm>
      <!-- Submit -->
      <div class="control">
        <button type="submit" class="button is-warning">Next &raquo;</button>
      </div>
    </template>
  </SchemaFormWithValidation>

  <div class="card">
    <div class="card-header">
      <p class="card-header-title">Form data (for testing only):</p>
    </div>
    <div class="card-body">
      <pre>{{ formData }}</pre>
    </div>
  </div>
</template>

<script setup>
import { SchemaFormFactory, useSchemaForm } from 'formvuelate'
import VeeValidatePlugin from '@formvuelate/plugin-vee-validate';
import { useFormSchema } from './form/buildformschema';
import { useFetchFormData, useReportAddOrUpdate } from './form/formDataUtils';
import _ from 'lodash';
import TextInput from './form/TextInput.vue';
import { ref } from 'vue';

const props = defineProps({
  moduleName: {
    type: String,
    required: true,
  },
  formSections: {
    type: [Array, Object],
    required: true
  }
});

console.log('MODULE SECTIONS', props.formSections);

const emit = defineEmits(['formSubmit']);

const SchemaFormWithValidation = SchemaFormFactory([
  VeeValidatePlugin()
]);

console.log('MODULE NAME', props.moduleName);

const { reportId, formData } = await useFetchFormData(props.moduleName);
console.log('FORM DATA?', props.moduleName, formData.value);
useSchemaForm(formData);
const formSchema = useFormSchema(props.formSections);
// const formSchema = [{
//   model: 'thingy',
//   label: "Pew pew",
//   component: TextInput
// }];

console.log('SCHEMA:', formSchema)

async function onFormSubmit() {
  try {
    // TODO: move this upward in component tree (ie. centralize firebase handling)
    // ...Maybe with dep injection?
    await useReportAddOrUpdate(props.moduleName);
    emit('formSubmit', reportId.value);
  }
  catch(error) {
    console.error('Error writing report:', error);
  }
}
</script>
