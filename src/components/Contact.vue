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
          <h3 class="title is-4">Jane Doe</h3>
          <p>
            Email: <a href="#" class="is-block">janedoe@idontexist.com</a>
          </p>
          <p>
            Phone: <a href="#" class="is-block">+1 (234) 567-8909</a>
          </p>
          <p>
            {{ friendo }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  friendo: String
});

console.log(props);
</script>