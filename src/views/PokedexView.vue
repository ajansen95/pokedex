<template>
  <main class="px-default">
    <h1 class="text-3xl font-bold">Pokédex</h1>
    <div class="mt-default gap-default grid grid-cols-2">
      <PokedexCard v-for="n in 5" :key="n" />
    </div>
  </main>
</template>

<script setup lang="ts">
import PokedexCard from '@/components/PokedexCard.vue'
</script>
