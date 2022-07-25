<template>
  <div class="content fa-2x">
      <span class="icon has-text-primary is-large mr-5">
        <i class="fa-solid fa-closed-captioning"></i>
      </span>
      <span class="icon has-text-primary is-large mr-5">
        <i class="fa-solid fa-hands-asl-interpreting"></i> 
      </span>
      <span class="icon has-text-warning is-large mr-5">
        <i class="fa-brands fa-accessible-icon"></i> 
      </span>
  </div>
</template>

<script setup>
const props = defineProps({
  icons: {
    type: Array,
    required: true
  }
});
</script>