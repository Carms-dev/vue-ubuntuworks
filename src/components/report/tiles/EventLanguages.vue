<template>
  <div class="content mb-6">
    <p class="block">
      The event will be held in the following languages:
    </p>
    <ul class="mb-5">
      <li class="block" v-for="language in languages">
        <strong>{{ language }}</strong>
      </li>
    </ul>
    <p>
      Translation services available:
    </p>
    <ul>
      <li class="block" v-for="service in translation">
        <strong>{{ service }}</strong>
      </li>
    </ul>
  </div>
</template>

<script setup>import { ref } from 'vue';

const props = defineProps({
  languages: {
    type: Array[String],
    required: true
  },
  translation: {
    type: Array[String],
    required: true
  }
});
</script>