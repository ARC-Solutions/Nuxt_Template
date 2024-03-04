<script setup lang="ts">
  import { Github } from 'lucide-vue-next';
</script>

<template>
  <div>
    <main class="flex-1">
      <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center space-y-4 text-center">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ">
              Welcome to <span class="bg-gradient-to-t from-emerald-400 to-cyan-400 bg-clip-text text-transparent">(⁄ ⁄>⁄ω⁄<⁄ ⁄)⁄</span>
            </h1>
            <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              A "powerful" and versatile template built with Nuxt, Tailwind, and TypeScript.
            </p>
            <Button as="a" href="https://github.com/ARC-Solutions/Nuxt_Template" rel="noopener noreferrer" target="_blank">
              <Github />
              Use Template
            </Button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>

</style>