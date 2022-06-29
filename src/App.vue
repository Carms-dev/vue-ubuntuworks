<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
</script>

<template>
  <!-- <Header></Header> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>

    <div class="buttons">
      <a class="button is-primary">Primary</a>
      <a class="button is-link">Link</a>
    </div>
  </section>
</template>

<style lang="scss">
/* #app {
  font-family: 'Poppins', sans-serif;
} */
</style>
