<template>
  <SchemaFormWithValidation
    :schema="basicQuestionsSchema"
    schemaRowClasses="mb-6"
    @submit="onFormSubmit"
  >
    <template #afterForm>
      <button>Submit</button>
    </template>
  </SchemaFormWithValidation>
</template>

<script setup>
import { SchemaFormFactory, useSchemaForm } from 'formvuelate'
import VeeValidatePlugin from '@formvuelate/plugin-vee-validate';
import basicQuestionList from "../data/basicQuestions.json";
import { useFormSchema } from './form/buildformschema';

const SchemaFormWithValidation = SchemaFormFactory([
  VeeValidatePlugin()
]);

const formData = {};
useSchemaForm(formData);

const basicQuestionsSchema = useFormSchema(basicQuestionList)

function onFormSubmit() {  
  console.log('submitted!');
}
</script>
