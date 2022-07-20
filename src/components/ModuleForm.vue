<template>
  <div>
    {{ module.name }}
  </div>
</template>

<script setup>
defineProps({
  module: {
    type: Object,
    required: true,
    default: {}
  }
});
</script>