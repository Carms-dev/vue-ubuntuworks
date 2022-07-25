<template>
  <ul>
    <li class="block" v-for="service in services">
      <span class="icon mr-4 has-text-primary"><i class="fa-solid fa-check"></i></span>
      <strong>{{ service }}</strong>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  services: {
    type: Array,
    required: true,
    default: []
  }
})
</script>