<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 16 16">
    <title>arrow</title>
    <path
      :class="props.fillClass"
      d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
    />
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    fillClass: string
  }>(),
  {
    fillClass: 'fill-black'
  }
)
</script>
