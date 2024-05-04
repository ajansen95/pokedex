<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 16 16">
    <title>menu</title>
    <path :class="props.fillClass" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    fillClass?: string
  }>(),
  {
    fillClass: 'fill-black'
  }
)
</script>
