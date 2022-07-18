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
import { ref, unref } from 'vue';
import db from '../firebase/init';
import { doc, getDoc, collection, addDoc, setLogLevel, serverTimestamp } from "firebase/firestore";
import { useStorage } from '@vueuse/core';
import { useFetchFormData } from './form/fetchFormData';
import router from '../router';

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

// const formData = ref(useFetchFormData());
// const reportId = useStorage('report-id', "");

const { reportId, formData } = await useFetchFormData();

// const formData = ref({});

console.log(formData);

useSchemaForm(formData);

const basicQuestionsSchema = useFormSchema(props.fieldList);

// setLogLevel('debug');

async function onFormSubmit() {
  const report = formData.value;
  report.created = serverTimestamp();

  try {
    const reportRef = await addDoc(collection(db, "reports"), report);
    console.log("Report written with ID", reportRef.id);
    reportId.value = reportRef.id;
    router.push(
      `/reports/${reportId}/modules/audio_visual`
    );
  }
  catch(error) {
    console.error('Error writing report', error);
  }
}
</script>
