<script setup lang="ts">
import { Code, AppWindow, Database } from 'lucide-vue-next';
import Feature from '@/components/landing-page/feature.vue';
</script>

<template>
<div>
  <section class="w-full py-12 md:py-24 lg:py-32">
    <div class="container px-4 md:px-6">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Feature title="TypeScript Support" description="Enjoy the benefits of TypeScript in your Nuxt project." :icon="Code" />
        <Feature title="Tailwind CSS" description="Style your application with ease using Tailwind CSS." :icon="AppWindow" />
        <Feature title="Nuxt API Integration" description="Connect your Nuxt application to your API seamlessly." :icon="Database" />
      </div>
    </div>
  </section>
</div>
</template>

<style scoped>

</style>