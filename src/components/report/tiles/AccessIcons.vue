<template>
  <div class="content access-icons fa-2x">
    <button class="button is-large is-link is-active mr-5">
      <span class="icon is-large">
        <i class="fa-solid fa-inverse fa-closed-captioning"></i>
      </span>
    </button>
    <button class="button is-large is-link is-active mr-5">
      <span class="icon is-large">
        <i class="fa-solid fa-inverse fa-hands-asl-interpreting"></i> 
      </span>
    </button>
    <button class="button access-warning is-large is-link is-active mr-5">
      <span class="icon is-large">
        <i class="fa-brands fa-inverse fa-accessible-icon"></i> 
      </span>
    </button>
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