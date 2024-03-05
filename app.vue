<template>
  <div class='bg-gradient-to-t from-slate-900 to-slate-700 flex flex-col min-h-screen'>
    <Main />
    <Features />
    <div class="flex justify-center items-center">
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import Main from '@/components/landing-page/main.vue';
import Features from '@/components/landing-page/features.vue';
const { data } = await useFetch('/api/costs');
</script>