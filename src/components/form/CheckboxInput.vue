<template>
</template>

<script setup>
import { useFieldProps, useLabelHtml } from './setupFields';

const props = defineProps(useFieldProps());
const { labelHtml } = useLabelHtml(props);
</script>