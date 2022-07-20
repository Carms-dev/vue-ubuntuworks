<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <!-- Left Panel -->
        <div class="column is-one-quarter">
          <div class="module-buttons is-flex are-large is-flex-direction-column is-align-items-start">
            <button
              v-for="module in selectedModules"
              :key="module.key"
              class="box p-5 mb-4 is-clickable"
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

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useModules } from '../data/modules';

const selectedModules = useModules();
const currentModule = selectedModules[0];
</script>

<style scoped>

</style>
