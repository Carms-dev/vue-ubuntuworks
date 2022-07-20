<template>
  <SchemaFormWithValidation
    :schema="basicQuestionsSchema"
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

const props = defineProps({
  formSections: {
    type: [Array, Object],
    required: true,
    default: []
  }
});

const emit = defineEmits(['formSubmit']);

const SchemaFormWithValidation = SchemaFormFactory([
  VeeValidatePlugin()
]);

const { reportId, formData } = await useFetchFormData();
useSchemaForm(formData);
const basicQuestionsSchema = useFormSchema(props.formSections);

console.log(basicQuestionsSchema);

async function onFormSubmit() {
  try {
    // TODO: move this upward in component tree (ie. centralize firebase handling)
    // ...Maybe with dep injection?
    await useReportAddOrUpdate();
    emit('formSubmit', reportId.value);
  }
  catch(error) {
    console.error('Error writing report:', error);
  }
}
</script>
