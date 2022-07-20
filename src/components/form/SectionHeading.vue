<template>
  <h2 class="title is-2">
    {{ label }}
  </h2>
</template>

<script setup>
import { useFieldProps } from './setupFields';

const props = defineProps(useFieldProps());

console.log(props.label);
</script>