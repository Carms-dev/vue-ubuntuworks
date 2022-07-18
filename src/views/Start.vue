<template>
  <section class="section">
    <div class="container is-max-desktop">
      <div class="box p-6 mb-6">
        <h1 class="title is-1">
          Let's set it up! 
        </h1>
        <p class="block is-size-4 has-text-grey">Gather the basic information about your event and select relevant areas of disabilities!</p>

        <Suspense>
          <!-- Dynamic form -->
          <DynamicForm :fieldList="basicQuestionList"/>
        </Suspense>
      </div>
    </div>
  </section>

</template>

<script setup>
import DynamicForm from '../components/DynamicForm.vue';
import basicQuestionList from "../data/basicQuestions.json";
import { Suspense } from 'vue';
</script>