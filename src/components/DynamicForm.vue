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

const props = defineProps({
  fieldList: {
    type: [Array, Object],
    required: true,
    default: []
  }
});

const SchemaFormWithValidation = SchemaFormFactory([
  VeeValidatePlugin()
]);

const { reportId, formData, formDataSnap } = await useFetchFormData();
useSchemaForm(formData);
const basicQuestionsSchema = useFormSchema(props.fieldList);

async function onFormSubmit() {
  useReportAddOrUpdate();
}
</script>
