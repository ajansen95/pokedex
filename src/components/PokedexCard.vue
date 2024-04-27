<template>
  <div class="flex h-28 flex-col gap-1 rounded-2xl bg-teal-500 bg-opacity-80 p-3.5 text-white">
    <span class="text-sm font-bold">Bulbasauer</span>
    <TypeChip type="Grass" />
    <TypeChip type="Poison" />
  </div>
</template>

<script setup lang="ts">
import TypeChip from '@/components/TypeChip.vue'
</script>
