<template>
  <SchemaFormWithValidation
    :schema="basicQuestionsSchema"
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
import basicQuestionList from "../data/basicQuestions.json";
import { useFormSchema } from './form/buildformschema';
import { ref } from 'vue';

const SchemaFormWithValidation = SchemaFormFactory([
  VeeValidatePlugin()
]);

const formData = ref({});
useSchemaForm(formData);

const basicQuestionsSchema = useFormSchema(basicQuestionList)

function onFormSubmit() {  
  console.log('submitted!');
  console.log(formData);
}
</script>
