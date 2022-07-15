<template>
  <SchemaFormWithValidation
    :schema="testSchema"
    schemaRowClasses="mb-6"
    @submit="onFormSubmit"
  >
    <template #afterForm>
      <button>Submit</button>
    </template>
  </SchemaFormWithValidation>
</template>

<script setup>
import { SchemaForm, SchemaWizard, SchemaFormFactory, useSchemaForm } from 'formvuelate'
import VeeValidatePlugin from '@formvuelate/plugin-vee-validate';
import TextInput from './form/TextInput.vue';
import * as Yup from 'yup';
// import basicQuestions from "../data/basicQuestions.json";
import RadioInput from './form/RadioInput.vue';
import SelectInput from './form/SelectInput.vue';
import ModuleCheckBoxInput from './form/ModuleCheckBoxInput.vue';

const SchemaFormWithValidation = SchemaFormFactory([
  VeeValidatePlugin()
]);

const formData = {};
useSchemaForm(formData);

const basicQuestionsSchema = [
  {
    model: 'event_name',
    component: TextInput,
    label: 'Event Name',
    validations: Yup.string().required()
  },
  {
    model: 'event_type',
    component: TextInput,
    label: 'Event Type',
    validations: Yup.string().required()
  }
];

const basicQuestions = [
  {
    "key": "event_name",
    "description": "the name of your event",
    "label": "What's the event name?",
    "type": "text-input",
    "initial": "",
    "required": true
  },
  {
    "key": "event_type",
    "label": "What's the event type?",
    "description": "the type of your event",
    "type": "text-input",
    "initial": "",
    "required": true
  },
]

const testSchema = buildFormSchema(basicQuestions);

function onFormSubmit() {  
  console.log('submitted!');
}

/**
 * Take in array of objects with form question data and convert to
 * schema for formvuelate
 */
function buildFormSchema(questionList) {
  return questionList.map(question => {
    const fieldSchema = {
      model: question.key,
      label: question.label,
      validations: Yup
    };

    // Map fields based on type
    switch (question.type) {
      case "text-input":
        fieldSchema.component = TextInput;
        fieldSchema.validations = fieldSchema
          .validations
          .string()
        break;
      case "multiple-choice":
        fieldSchema.component = RadioInput;
        fieldSchema.validations = fieldSchema
          .validations
          .string();
        break;
      case "multi-select":
        fieldSchema.component = SelectInput;
        fieldSchema.validations = fieldSchema
          .validations
          .array();
        break;
      case "module-checkbox-group":
        fieldSchema.component = ModuleCheckBoxInput;
        fieldSchema.validations = fieldSchema
          .validations
          .array();
        break;
    }

    const requiredMessage = question.hasOwnProperty('description')
      ? `Psst! Don't forget to enter ${question.description}`
      : undefined;

    if (question.required) {
      fieldSchema.required = true;
      fieldSchema.validations = fieldSchema.validations.required(requiredMessage);
    }

    return fieldSchema;
  });
}


</script>
