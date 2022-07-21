<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <!-- Left Panel -->
        <div class="column is-one-quarter">
          <div class="module-buttons is-flex are-large is-flex-direction-column is-align-items-start">
            <button
              v-for="(module, index) in chosenModules"
              :key="module.key"
              class="box p-5 mb-4 is-clickable"
              :class="{ selected: index === selectedIndex }"
              @click="switchModuleView(index)"
            >
              <p class="is-size-5 mb-3">{{ module.name }}</p>
              <img
                :src="module.image.url"
                :alt="module.image.alt"
                style="width: 100%"
              >
            </button>
          </div>
        </div>
        <!-- Right Panel -->
        <div class="column">
          <div class="box module-form-container p-6">
            <!-- Module Forms -->
            <template
              v-for="(module, index) in chosenModules"
              :key="module.key"
            >
              <div v-if="checkSelected(index)">
                <h1 class="title is-1">
                  {{ module.name }}
                </h1>
                <p class="block is-size-4 has-text-grey" v-if="module.description">{{ module.description }}</p>

                <Suspense>
                  <!-- Dynamic form -->
                  <DynamicForm
                    :module-name="module.key"
                    :form-sections="selectedModuleQuestions"
                    @form-submit="nextStep"
                  >
                    <template #actionButtons>
                      <!-- Back and Next -->
                      <div class="control" v-if="index !== 0">
                        <button @click="stepBack" type="button" class="button is-warning">&laquo; Back</button>
                      </div>
                      <div class="control">
                        <button type="submit" class="button is-warning">Next &raquo;</button>
                      </div>
                    </template>
                  </DynamicForm>
                </Suspense>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useChosenModules } from '../data/modules';
import ModuleForm from '../components/ModuleForm.vue';
import { computed, ref, watch } from 'vue';
import { Suspense } from 'vue';
import DynamicForm from '../components/DynamicForm.vue';
import moduleQuestions from '../data/moduleQuestions.json';
import router from '../router';
import { useRoute } from 'vue-router';
import { useStorage } from '@vueuse/core';

const route = useRoute();
const reportId = useStorage('report-id', "");

if (!reportId.value) {
  // TODO: change this into route guard
  router.push('/');
}

// const chosenModules = useChosenModules();
// let selectedIndex = ref(0);

const { chosenModules, selectedIndex, selectedModule } = useChosenModules();

console.log(selectedModule.value);

// watch((route.params) => {
//     console.log('params changes');
//   });

const selectedModuleQuestions = computed(() => {
  console.log('questions?????', moduleQuestions[selectedModule.value.key])
  return moduleQuestions[selectedModule.value.key];
});

function switchModuleView(moduleIndex) {
  const nextModule = chosenModules[moduleIndex];
  console.log('NEXT MODULE', nextModule);
  router.push(`/reports/${reportId.value}/modules/${nextModule.key}`);
}

function checkSelected(moduleIndex) {
  return moduleIndex === selectedIndex.value;
}

function nextStep() {
  if (selectedIndex.value === chosenModules.length - 1) {
    console.log('LAST STEP');
    router.push(`/reports/${reportId.value}`);
  } else {
    switchModuleView(selectedIndex.value + 1);
  }
}

function stepBack() {
  switchModuleView(selectedIndex.value - 1);
}
</script>
