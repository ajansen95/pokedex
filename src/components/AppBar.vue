<template>
  <nav class="flex justify-between border p-1">
    <button class="h-6 w-6">
      <ArrowIcon fill-class="fill-white" />
    </button>
    <button class="h-6 w-6">
      <BurgerIcon fill-class="fill-white" />
    </button>
  </nav>
</template>

<script setup lang="ts">
import BurgerIcon from '@/components/icons/BurgerIcon.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
</script>
