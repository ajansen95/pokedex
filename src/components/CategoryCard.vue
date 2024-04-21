<template>
  <button
    class="relative flex h-14 w-full items-center overflow-hidden rounded-2xl bg-opacity-80 p-4"
    :class="props.color"
  >
    <span class="text-sm font-bold text-white">{{ props.title }}</span>
    <PokeballIcon
      class="absolute -left-14 -top-14 h-24 opacity-30"
      color-code1="#FFFFFF"
      color-code2="#FFFFFF"
      color-code3="#FFFFFF"
      color-code4="#FFFFFF"
      color-code5="#FFFFFF00"
    />
    <PokeballIcon
      class="absolute -right-7 h-24 opacity-30"
      color-code1="#FFFFFF"
      color-code2="#FFFFFF"
      color-code3="#FFFFFF"
      color-code4="#FFFFFF"
      color-code5="#FFFFFF00"
    />
  </button>
</template>

<script setup lang="ts">
import PokeballIcon from '@/components/icons/PokeballIcon.vue'

const props = withDefaults(
  defineProps<{
    title: string
    color: string
  }>(),
  {}
)
</script>
