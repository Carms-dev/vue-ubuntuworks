<template>
  <section class="section">
    <div class="container">
      <div class="box p-0">
        <Suspense>
          <ReportShow></ReportShow>
        </Suspense>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Suspense } from 'vue';
import ReportShow from './ReportShow.vue';
</script>