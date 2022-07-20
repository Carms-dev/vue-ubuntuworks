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
              <ModuleForm :module="module" :questions="module.questions" v-if="checkSelected(index)" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useModules } from '../data/modules';
import ModuleForm from '../components/ModuleForm.vue';
import { computed, ref } from 'vue';

const chosenModules = useModules();
let selectedIndex = ref(0);
const selectedModule = computed(() => {
  return chosenModules[selectedIndex.value];
});

function switchModuleView(moduleIndex) {
  console.log('SWITCHING FROM', selectedIndex.value, 'TO', moduleIndex);
  selectedIndex.value = moduleIndex;
}

function checkSelected(moduleIndex) {
  return moduleIndex === selectedIndex.value;
}
</script>
