<template>
  <div class="content mb-6">
    <div class="block">
      {{ aboutText }}
    </div>
    <div>
      <strong>{{ eventTypeNote }}</strong>
    </div>
    
  </div>
  <p>
    <a class="button is-outlined is-link" href="#">Event homepage</a>
  </p>
</template>

<script setup>import { computed } from 'vue';

const eventTypes = {
  ONLINE: 0,
  IN_PERSON: 1,
  HYBRID: 2
};

const props = defineProps({
  aboutText: {
    type: String,
    required: true
  },
  eventType: {
    type: Number,
    required: true
  },
  eventLinks: {
    type: Array[String],
  }
});

const eventTypeNote = computed(() => {
  let noteEnd = "";

  switch (props.eventType) {
    case eventTypes.ONLINE:
      noteEnd = "online";
      break;
    case eventTypes.IN_PERSON:
      noteEnd = "in-person";
      break;
    case eventTypes.HYBRID:
      noteEnd = "both online and in-person";
      break;
  }

  return `Please note: this event will be held ${noteEnd}.`;
});
</script>