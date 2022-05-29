<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <va-navbar>
    <template #left>
      <va-navbar-item>Left</va-navbar-item>
    </template>
    <template #center>
      <va-navbar-item>Center</va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item>Right</va-navbar-item>
    </template>
  </va-navbar>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
