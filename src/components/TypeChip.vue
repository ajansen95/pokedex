<template>
  <div class="w-min rounded-2xl bg-white bg-opacity-20 px-2.5 py-0.5 text-xs">{{ props.type }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string
}>()
</script>
