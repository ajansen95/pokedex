<template>
  <div class="flex items-center rounded-3xl bg-black bg-opacity-10">
    <SearchIcon class="mx-4 my-2" />
    <input
      class="my-2 mr-4 flex-1 bg-black bg-opacity-0"
      placeholder="Search Pokémon, Move, Ability etc"
    />
  </div>
</template>

<script setup lang="ts">
import SearchIcon from '@/components/icons/SearchIcon.vue'
</script>
