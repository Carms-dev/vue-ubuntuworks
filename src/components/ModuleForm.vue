<template>
  <div>
    <h1 class="title is-1">
      {{ module.name }}
    </h1>
    <p class="block is-size-4 has-text-grey" v-if="module.description">{{ module.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  module: {
    type: Object,
    required: true,
    default: {}
  },
  questions: {
    type: Array,
    required: true,
    default: []
  }
});
</script>