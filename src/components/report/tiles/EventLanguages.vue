<template>
  <div class="content mb-6">
    <p class="block">
      The event will be held in the following languages:
    </p>
    <ul class="mb-5">
      <li v-for="language in eventLanguages">
        <strong>{{ language }}</strong>
      </li>
    </ul>
    <p>
      Translation services available:
    </p>
    <ul>
      <li v-for="service in translationServices">
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
  }
});

// TODO: replace this and translation with dropdown-chosen list (selected from JSON)
const eventLanguages = ref([
  "English",
  "French"
]);

const translationServices = ref([
  "French to English"
])
</script>