<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  icon: Function
});
</script>

<template>
<div class="flex flex-col items-center space-y-4 text-center">
  <component :is="icon" />
  <h3 class="text-xl font-bold">{{ title }}</h3>
  <p class="text-gray-500">{{ description }}</p>
</div>
</template>

<style scoped>

</style>