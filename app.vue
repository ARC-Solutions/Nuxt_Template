<template>
  <div class='bg-gradient-to-t from-slate-900 to-slate-700 flex flex-col min-h-screen'>
    <Main />
    <Features />
  </div>
</template>

<script setup lang="ts">
import Main from '@/components/landing-page/main.vue';
import Features from '@/components/landing-page/features.vue';
</script>