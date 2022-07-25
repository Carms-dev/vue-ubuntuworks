<template>
  <div class="content">
    <div class="media">
      <figure class="media-left ml-0">
        <p class="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h3 class="title is-4">{{ name }}</h3>
          <p v-if="email">
            Email: <a href="#" class="is-block"><strong>{{ email }}</strong></a>
          </p>
          <p v-if="phone">
            Phone: <a href="#" class="is-block"><strong>{{ phone }}</strong></a>
          </p>
          <div v-if="other">
            <p class="block">
              Other:
            </p>
            <p>{{ other }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  other: {
    type: String
  }
});
</script>