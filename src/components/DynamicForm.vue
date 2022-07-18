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
import { useFormSchema } from './form/buildformschema';
import { ref, unref } from 'vue';
import db from '../firebase/init';
import { doc, getDoc, collection, addDoc, setLogLevel, Timestamp, serverTimestamp } from "firebase/firestore";

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

const formData = ref({});
useSchemaForm(formData);

const basicQuestionsSchema = useFormSchema(props.fieldList);

// setLogLevel('debug');

async function onFormSubmit() {
  const report = formData.value;
  report.created = serverTimestamp();

  try {
    const reportRef = await addDoc(collection(db, "reports"), report);
    console.log("Report written with ID", reportRef.id);
  }
  catch(error) {
    console.error('Error writing report', error);
  }
}
</script>
